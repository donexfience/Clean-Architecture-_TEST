import { PostId } from "../value-objects/post-id";

export class Post {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public authorid: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
