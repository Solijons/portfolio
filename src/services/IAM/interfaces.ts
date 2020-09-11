import { SignInResponse } from './enums';

export interface ILoginCreds {
    password: string;
    scope?: string;
    username: string;
}

export interface IIAMService {
    getToken(): Promise<string>;
    signIn(creds: ILoginCreds): Promise<SignInResponse>;
    signOut(): Promise<void>;
}

export interface IIAMServiceConfig {
    cookieName?: string;
}
