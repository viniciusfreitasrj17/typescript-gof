import { Request, Response } from 'express';
import { Account } from '../models/Account';
import { accountServiceInstance } from '../services/AccountService';

export class AccountController {
  private static _accountControllerInstance: AccountController | null = null;

  private constructor() {}

  static get accountControllerInstance(): AccountController {
    if (this._accountControllerInstance === null) {
      this._accountControllerInstance = new AccountController();
    }

    return this._accountControllerInstance;
  }

  add(request: Request, response: Response): Response {
    try {
      const { email, password }: Account = request.body;
      accountServiceInstance.add({ email, password });
      return response.status(200).json({ Message: 'Added' });
    } catch (error: any) {
      console.log(error);
      return response.status(404).json({ Error: error.message });
    }
  }

  remove(request: Request, response: Response): Response {
    try {
      const { index } = request.params;
      accountServiceInstance.remove(Number(index));
      return response.status(200).json({ Message: 'Removed' });
    } catch (error: any) {
      console.log(error);
      return response.status(404).json({ Error: error.message });
    }
  }

  show(_request: Request, response: Response): Response {
    try {
      const data: Account[] = accountServiceInstance.show();
      return response.status(200).json(data);
    } catch (error: any) {
      console.log(error);
      return response.status(404).json({ Error: error.message });
    }
  }
}

export const { accountControllerInstance } = AccountController;
