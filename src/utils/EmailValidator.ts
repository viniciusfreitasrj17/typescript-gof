import { EmailValidatorProtocol } from '../protocols/EmailValidatorProtocol';
// import { emailIsEmailAdapter } from '../adapters/EmailIsEmailAdapter';
import { emailValidatorAdapter } from '../adapters/EmailValidatorAdapter';

export class EmailValidator implements EmailValidatorProtocol {
  private static _emailValidator: EmailValidator | null = null;

  private constructor() {}

  static get emailValidator(): EmailValidator {
    if (this._emailValidator === null) {
      this._emailValidator = new EmailValidator();
    }

    return this._emailValidator;
  }

  isEmail(value: string): boolean {
    return emailValidatorAdapter.isEmail(value);
  }

  // isEmail(value: string): boolean {
  //   return emailIsEmailAdapter.isEmail(value);
  // }
}

export const { emailValidator } = EmailValidator;
