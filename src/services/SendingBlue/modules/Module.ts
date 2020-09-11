import { ILogger } from '../../../context/Logger/interfaces';
import { IIAMService } from '../../IAM/interfaces';

export default abstract class Module {
    public readonly className = this.constructor.name;

    protected iamService: IIAMService;
    protected logger: ILogger;
    protected url: string;

    constructor(url: string, iamService: IIAMService, logger: ILogger) {
        this.url = url;
        this.iamService = iamService;
        this.logger = logger;
    }
}
