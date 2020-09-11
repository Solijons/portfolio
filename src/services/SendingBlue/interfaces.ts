import Transactions from './modules/Transactions';

export interface ISendingBlueConfig {
  url: string;
}

export interface ISendingBlueService {
  transactions(): Transactions;
}
