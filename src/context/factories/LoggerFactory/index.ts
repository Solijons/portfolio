import { ILogger } from '../../Logger/interfaces';

export default class LoggerFactory {
    public static getInstance(): ILogger {
        return console as ILogger;
    }
}
