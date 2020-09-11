import { APP_ENV } from './enums';
import {
    IAppConfig,
    IConfig,
    IServicesConfig
} from './interfaces';

export default class Config implements IConfig {
    protected _cookieName?: string;
    protected _env: APP_ENV;
    protected services?: IServicesConfig;

    constructor(config: IAppConfig) {
        if (config.env === 'prod') {
            this._env = APP_ENV.prod;
        }
        else if (config.env === 'non-prod') {
            this._env = APP_ENV["non-prod"];
        }
        else {
            this._env = APP_ENV.dev;
        }

        if (config.services) {
            this.services = config.services;
        }

        if (config.cookieName) {
            this._cookieName = config.cookieName;
        }

        this.getServiceConfig = this.getServiceConfig.bind(this);
        this.getServiceUrl = this.getServiceUrl.bind(this);
        this.listOfServices = this.listOfServices.bind(this);
    }

    get env() {
        return this._env;
    }

    get cookieName() {
        return this._cookieName;
    }

    public getServiceConfig(serviceName: string): object | undefined {
        if (this.services?.[serviceName]) {
            return this.services[serviceName];
        }
    }

    public getServiceUrl(serviceName: string): string | undefined {
        if (this.services) {
            return this.services[serviceName].url;
        }
    }

    public listOfServices(): string[] {
        const services: string[] = [];

        for (const service in this.services) {
            if (this.services.hasOwnProperty(service)) {
                services.push(service);
            }
        }

        return services;
    }

    public toString() {
        return JSON.stringify(this, null, 2);
    }
}
