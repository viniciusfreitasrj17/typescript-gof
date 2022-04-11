import { Account } from '../models/Account';
import { emailValidator } from '../utils/EmailValidator';

export class AccountService {
  private static _accountService: AccountService | null = null;
  private accounts: Account[] = [];

  private constructor() {}

  static get accountService(): AccountService {
    if (this._accountService === null) {
      this._accountService = new AccountService();
    }

    return this._accountService;
  }

  add(account: Account): void {
    try {
      if (!emailValidator.isEmail(account.email)) {
        throw new Error('Invalid Email');
      } else {
        this.accounts.push(account);
      }
    } catch (error: any) {
      console.log(error);
      throw Error(error.message);
    }
  }

  remove(index: number): void {
    try {
      if (!this.accounts.at(index)) {
        throw new Error('Not found');
      } else {
        this.accounts.splice(index, 1);
      }
    } catch (error: any) {
      console.log(error);
      throw Error(error.message);
    }
  }

  show(): Account[] {
    let accounts: Account[] | [] = [];
    try {
      accounts = this.accounts;
    } catch (error: any) {
      console.log(error);
      throw Error(error.message);
    }
    return accounts;
  }
}

export const { accountService } = AccountService;
