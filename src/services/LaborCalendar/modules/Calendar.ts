import { ILogger } from '../../../context/Logger/interfaces';
import { IIAMService } from '../../IAM/interfaces';
import { ILaborCalendarConfig } from '../interfaces';

import Module from './Module';

export default class Calendar extends Module {
  constructor(config: ILaborCalendarConfig, iamService: IIAMService, logger: ILogger) {
    super(config.url, iamService, logger);
  }
}
