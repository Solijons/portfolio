import { SignInResponse } from './enums';
import { IIAMService, ILoginCreds } from './interfaces';

export default class MockIAMService implements IIAMService {

    public getToken(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    public signIn(creds: ILoginCreds): Promise<SignInResponse> {
        console.log('signing in with creds:', creds);
        return new Promise((resolve, reject) => {
            if (creds.password === '' && creds.username === '') {
                console.log('sign in empty creds');
                reject(SignInResponse.BadCreds);
            }
            else if (creds.password.toLowerCase() === 'admin' && creds.username.toLowerCase() === 'admin') {
                console.log('sign in ok');
                resolve(SignInResponse.Ok);
            }
            else if (creds.username.toLowerCase() === 'admin') {
                console.log('sign in bad creds');
                resolve(SignInResponse.BadCreds);
            }
            else {
                console.log('sign in bad user');
                resolve(SignInResponse.BadUser);
            }
        });
    }

    public signOut(): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }
}
