import Calendar from './modules/Calendar';

export interface ILaborCalendarConfig {
  url: string;
}

export interface ILaborCalendarService {
  calendar(): Calendar;
}
