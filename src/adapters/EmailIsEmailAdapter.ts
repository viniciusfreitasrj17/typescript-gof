import { validate } from 'isemail';
import { EmailValidatorProtocol } from '../protocols/EmailValidatorProtocol';

export class EmailIsEmailAdapter implements EmailValidatorProtocol {
  private static _emailIsEmailAdapter: EmailIsEmailAdapter | null = null;

  private constructor() {}

  static get emailIsEmailAdapter(): EmailIsEmailAdapter {
    if (this._emailIsEmailAdapter === null) {
      this._emailIsEmailAdapter = new EmailIsEmailAdapter();
    }

    return this._emailIsEmailAdapter;
  }

  public isEmail(value: string): boolean {
    return validate(value);
  }
}

export const { emailIsEmailAdapter } = EmailIsEmailAdapter;
