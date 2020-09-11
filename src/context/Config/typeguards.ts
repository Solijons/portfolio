import { IConfig } from './interfaces';

export function isIConfig(obj: any): obj is IConfig {
    return (
        'clientId' in obj
        && 'clientSecret' in obj
        && 'env' in obj
        && 'oauthHost' in obj
        && 'getServiceConfig' in obj
        && 'getServiceUrl' in obj
        && 'listOfServices' in obj
        && typeof(obj.getServiceConfig) === 'function'
        && typeof(obj.getServiceUrl) === 'function'
        && typeof(obj.listOfServices) === 'function'
    );
}
