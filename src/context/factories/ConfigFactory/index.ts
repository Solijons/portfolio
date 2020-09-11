import ConfigError from '../../../errors/ConfigError';
import Config from '../../Config';
import { IAppConfig, IConfig } from '../../Config/interfaces';

import defaultConfig from '../../../config/default.config.json';
import devConfig from '../../../config/dev.config.json';
import nonProdConfig from '../../../config/non-prod.config.json';
import prodConfig from '../../../config/prod.config.json';

export default class ConfigFactory {
    public static getInstance(): IConfig {
        const config: IAppConfig = defaultConfig;

        if (typeof(window) === 'undefined' || RegExp(/localhost/i).test(window.location.hostname)) {
            return ConfigFactory.loadDevConfig(config);
        }
        else if (RegExp(/breeding-np.ag/i).test(window.location.hostname)) {
            return ConfigFactory.loadNonProdConfig(config);
        }
        else if (RegExp(/breeding.ag/i).test(window.location.hostname)) {
            return ConfigFactory.loadProdConfig(config);
        }

        return new Config(config);
    }

    private static loadDevConfig(config: IAppConfig) {
        try {
            return new Config(
                Object.assign(config, devConfig)
            );
        }
        catch (err) {
            throw new ConfigError(`Failed to load development configuration.`);
        }
    }

    private static loadNonProdConfig(config: IAppConfig) {
        try {
            return new Config(
                Object.assign(config, nonProdConfig)
            );
        }
        catch (err) {
            throw new ConfigError(`Failed to load non-prod configuration.`);
        }
    }

    private static loadProdConfig(config: IAppConfig) {
        try {
            return new Config(
                Object.assign(config, prodConfig)
            );
        }
        catch (err) {
            throw new ConfigError(`Failed to load prod configuration.`);
        }
    }
}
