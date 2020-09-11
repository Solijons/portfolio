import { ILogger } from './interfaces';

export function isILogger(obj: any): obj is ILogger {
    return (
        'log' in obj
        && typeof(obj.log) === 'function'
    );
}
