import { IIAMService, IIAMServiceConfig } from '../../../services/IAM/interfaces';
import PingId from '../../../services/IAM/PingId';

import FactoryBase from '../baseClasses/FactoryBase';

import LaborCalendar from '../../../services/LaborCalendar';
import { ILaborCalendarConfig, ILaborCalendarService } from '../../../services/LaborCalendar/interfaces';

export default class ServiceFactory extends FactoryBase {
  private static iamService?: IIAMService;
  private static laborCalendarService?: LaborCalendar;

  constructor() {
    super();
    this.getIAMService = this.getIAMService.bind(this);
    this.getTractivityService = this.getTractivityService.bind(this);
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

  public getTractivityService(): LaborCalendar {
    if (!ServiceFactory.laborCalendarService) {
      ServiceFactory.laborCalendarService = new LaborCalendar(
        this.config.getServiceConfig('laborCalendarService') as ILaborCalendarConfig,
        this.getIAMService(),
        this.logger,
      );
    }
    return ServiceFactory.laborCalendarService;
  }
}
