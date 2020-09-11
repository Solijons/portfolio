import ConfigFactory from '../../context/factories/ConfigFactory';
import { ILogger } from '../../context/Logger/interfaces';
import { SignInResponse } from './enums';
import { IIAMService, IIAMServiceConfig, ILoginCreds } from './interfaces';

import { APP_ENV } from '../../context/Config/enums';

export default class PingId implements IIAMService {
    protected cookieName: string | undefined;
    protected logger: ILogger;

    constructor(config: IIAMServiceConfig, logger: ILogger) {
        this.cookieName = config.cookieName;
        this.logger = logger;
    }

    /**
     * if env is not dev then
     * getToken()
     * @returns {String} token or empty string
     */
    public async getToken(): Promise<string> {
        let token: string = '';
        const config = ConfigFactory.getInstance();

        try {
            if (config.env !== APP_ENV.dev) {
                if (this.cookieName) {
                    token = this.getCookieValue();
                }
            }
        }
        catch (err) {
            this.logger.log('warn', `getToken: ${err.toString()}`);
        }

        return token;
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
}
