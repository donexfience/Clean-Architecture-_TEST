export class Email {
  constructor(public readonly address: string) {
    if (!this.validate(address)) {
      throw new Error("Invalid email address");
    }
  }
  private validate(address: string): boolean {
    return /\S+@\S+\.\S+/.test(address);
  }
}
