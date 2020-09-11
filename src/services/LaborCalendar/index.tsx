import { ILogger } from '../../context/Logger/interfaces';
import { IIAMService } from '../IAM/interfaces';
import { ILaborCalendarConfig, ILaborCalendarService } from './interfaces';

import Calendar from './modules/Calendar';

export default class LaborCalendar implements ILaborCalendarService {
  protected static calendar: Calendar;
  protected static config: ILaborCalendarConfig;
  protected static iamService: IIAMService;
  protected static logger: ILogger;

  constructor(config: ILaborCalendarConfig, iamService: IIAMService, logger: ILogger) {
    if (!LaborCalendar.config) {
      LaborCalendar.config = config;
    }

    if (!LaborCalendar.iamService) {
      LaborCalendar.iamService = iamService;
    }

    if (!LaborCalendar.logger) {
      LaborCalendar.logger = logger;
    }
  }

  public calendar(): Calendar {
    if (!LaborCalendar.calendar) {
      LaborCalendar.calendar = new Calendar(
        LaborCalendar.config,
        LaborCalendar.iamService,
        LaborCalendar.logger,
      );
    }
    return LaborCalendar.calendar;
  }

}
