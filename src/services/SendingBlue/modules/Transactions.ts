import { ILogger } from '../../../context/Logger/interfaces';
import { IIAMService } from '../../IAM/interfaces';
import { ISendingBlueConfig } from '../interfaces';

import Module from './Module';

export default class Transactions extends Module {
  constructor(config: ISendingBlueConfig, iamService: IIAMService, logger: ILogger) {
    super(config.url, iamService, logger);
    this.sendTransactionEmail = this.sendTransactionEmail.bind(this);
  }


  public async sendTransactionEmail(email: string, name: string, subject: string, body: string) {
    try {
      const token = await this.iamService.getToken().then((tkn) => tkn);
      const res = await fetch(`${this.url}/v3/smtp/email`, {
        body: JSON.stringify({
          replyTo: { email, name, },
          sender: { email: 'solijon7762@gmail.com', name: 'Solijon Sharipov', },
          subject, textContent: body,
          to: [{ email: 'solijon7762@gmail.com', name: 'Solijon Sharipov', }],
        }),
        headers: {
          'accept': 'application/json',
          'api-key': token,
          'content-type': 'application/json',
        },
        method: 'POST'
      });
      return await res.json();
    } catch (error) {
      this.logger.log('warn', `${this.className}.sendTransactionEmail(): ${error}`)
    }
  }
}
