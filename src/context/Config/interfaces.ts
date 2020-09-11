import { APP_ENV } from './enums';

export interface IAppConfig {
    cookieName?: string;
    env: string;
    services?: IServicesConfig;
}

export interface IConfig {
    env: APP_ENV;
    getServiceConfig(serviceName: string): object | undefined;
    getServiceUrl(serviceName: string): string | undefined;
    listOfServices(): string[];
}

export interface IServicesConfig {
    [index: string]: {
        url?: string;
    };
}
