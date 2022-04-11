import { Account } from '../models/Account';

export class AccountService {
  private static _accountServiceInstance: AccountService | null = null;
  private accounts: Account[] = [];

  private constructor() {}

  static get accountServiceInstance(): AccountService {
    if (this._accountServiceInstance === null) {
      this._accountServiceInstance = new AccountService();
    }

    return this._accountServiceInstance;
  }

  add(account: Account): void {
    try {
      this.accounts.push(account);
    } catch (error) {
      console.log(error);
    }
  }

  remove(index: number): void {
    try {
      this.accounts.splice(index, 1);
    } catch (error) {
      console.log(error);
    }
  }

  show(): Account[] {
    let accounts: Account[] | [] = [];
    try {
      accounts = this.accounts;
    } catch (error) {
      console.log(error);
    }
    return accounts;
  }
}

export const { accountServiceInstance } = AccountService;
