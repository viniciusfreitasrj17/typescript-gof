import { AccountProtocol } from '../protocols/AccountProtocol';

export class Account implements AccountProtocol {
  constructor(public email: string, public password: string) {}
}
