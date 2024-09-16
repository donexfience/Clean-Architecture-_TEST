export class PostId {
  constructor(private value: string) {
    if (!value) {
      throw new Error("PostID cannot be empty");
    }
  }
  toString(): string {
    return this.value;
  }
}
