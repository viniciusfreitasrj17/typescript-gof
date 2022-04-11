import { Request, Response } from 'express';
import { Account } from '../models/Account';
import { accountService } from '../services/AccountService';

export class AccountController {
  private static _accountController: AccountController | null = null;

  private constructor() {}

  static get accountController(): AccountController {
    if (this._accountController === null) {
      this._accountController = new AccountController();
    }

    return this._accountController;
  }

  add(request: Request, response: Response): Response {
    const { email, password }: Account = request.body;
    try {
      accountService.add({ email, password });
      return response.status(200).json({ Message: 'Added' });
    } catch (error: any) {
      return response.status(400).json({ Error: error.message });
    }
  }

  remove(request: Request, response: Response): Response {
    const { index } = request.params;
    try {
      accountService.remove(Number(index));
      return response.status(200).json({ Message: 'Removed' });
    } catch (error: any) {
      return response.status(400).json({ Error: error.message });
    }
  }

  show(_request: Request, response: Response): Response {
    try {
      return response.status(200).json(accountService.show());
    } catch (error: any) {
      return response.status(400).json({ Error: error.message });
    }
  }
}

export const { accountController } = AccountController;
