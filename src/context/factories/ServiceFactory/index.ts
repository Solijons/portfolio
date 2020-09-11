import { IIAMService, IIAMServiceConfig } from '../../../services/IAM/interfaces';
import PingId from '../../../services/IAM/PingId';

import FactoryBase from '../baseClasses/FactoryBase';

import SendingBlue from '../../../services/SendingBlue';
import { ISendingBlueConfig } from '../../../services/SendingBlue/interfaces';

export default class ServiceFactory extends FactoryBase {
  private static iamService?: IIAMService;
  private static sendingBlueService?: SendingBlue;

  constructor() {
    super();
    this.getIAMService = this.getIAMService.bind(this);
    this.getSendingBlueService = this.getSendingBlueService.bind(this);
  }

  public getIAMService(): IIAMService {
    if (!ServiceFactory.iamService) {
      ServiceFactory.iamService = new PingId(
        this.config.getServiceConfig('iam') as IIAMServiceConfig,
        this.logger,
      );
    }

    return ServiceFactory.iamService;
  }

  public getSendingBlueService(): SendingBlue {
    if (!ServiceFactory.sendingBlueService) {
      ServiceFactory.sendingBlueService = new SendingBlue(
        this.config.getServiceConfig('sendingBlueService') as ISendingBlueConfig,
        this.getIAMService(),
        this.logger,
      );
    }
    return ServiceFactory.sendingBlueService;
  }
}
