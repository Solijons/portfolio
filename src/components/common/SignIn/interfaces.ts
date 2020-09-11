import { IIAMService } from '../../../services/IAM/interfaces';

export interface ISignIn {
    iamService: IIAMService;
    redirectUrl: string;
}
