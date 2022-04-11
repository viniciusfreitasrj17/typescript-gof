import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocol } from '../protocols/EmailValidatorProtocol';

export class EmailValidatorAdapter implements EmailValidatorProtocol {
  private static _emailValidatorAdapter: EmailValidatorAdapter | null = null;

  private constructor() {}

  static get emailValidatorAdapter(): EmailValidatorAdapter {
    if (this._emailValidatorAdapter === null) {
      this._emailValidatorAdapter = new EmailValidatorAdapter();
    }

    return this._emailValidatorAdapter;
  }

  public isEmail(value: string): boolean {
    return isEmail(value);
  }
}

export const { emailValidatorAdapter } = EmailValidatorAdapter;
