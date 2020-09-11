import { ILogger } from '../../context/Logger/interfaces';
import { IIAMService } from '../IAM/interfaces';
import { ISendingBlueConfig, ISendingBlueService } from './interfaces';

import Transactions from './modules/Transactions';

export default class SendingBlue implements ISendingBlueService {
  protected static transactions: Transactions;
  protected static config: ISendingBlueConfig;
  protected static iamService: IIAMService;
  protected static logger: ILogger;

  constructor(config: ISendingBlueConfig, iamService: IIAMService, logger: ILogger) {
    if (!SendingBlue.config) {
      SendingBlue.config = config;
    }

    if (!SendingBlue.iamService) {
      SendingBlue.iamService = iamService;
    }

    if (!SendingBlue.logger) {
      SendingBlue.logger = logger;
    }
  }

  public transactions(): Transactions {
    if (!SendingBlue.transactions) {
      SendingBlue.transactions = new Transactions(
        SendingBlue.config,
        SendingBlue.iamService,
        SendingBlue.logger,
      );
    }
    return SendingBlue.transactions;
  }

}
