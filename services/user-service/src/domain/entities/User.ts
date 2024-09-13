import { Email } from "../value-objects/email";

export class User {
  id?: string;
  username: string;
  email: Email;
  password: string;
  constructor({
    id,
    username,
    email,
    password,
  }: {
    id?: string;
    username: string;
    email: string;
    password: string;
  }) {
    this.id =id;
    this.username = username;
    this.email = new Email(email);
    this.password = password;
  }
}
