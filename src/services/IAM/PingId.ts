import { ILogger } from '../../context/Logger/interfaces';
import { SignInResponse } from './enums';
import { IIAMService, IIAMServiceConfig, ILoginCreds } from './interfaces';

export default class PingId implements IIAMService {
    protected cookieName: string | undefined;
    protected logger: ILogger;
    protected apiKey: string | undefined;

    constructor(config: IIAMServiceConfig, logger: ILogger) {
        this.cookieName = config.cookieName;
        this.logger = logger;
        this.apiKey = config.apiKey;
    }

    /**
     * if env is not dev then
     * getToken()
     * @returns {String} token or empty string
     */
    public async getToken(): Promise<string> {
        return String(this.getSendingBlueApiKey());
    }

    public signIn = async (loginObj: ILoginCreds) => {
        return SignInResponse.Ok;
    }

    public signOut = async () => {
        return;
    }

    protected getCookieValue = () => {
        let key: string;
        let val: string;
        let cookie: string = '';

        document.cookie.split(';').forEach((cke) => {
            key = cke.split('=')[0];
            val = cke.split('=')[1];
            if (key.trim() === this.cookieName) {
                cookie = val;
            }
        });

        return cookie;
    }

    protected getSendingBlueApiKey = () => {
        return this.apiKey;
    }
}
