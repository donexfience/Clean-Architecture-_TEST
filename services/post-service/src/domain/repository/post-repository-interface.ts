import { Post } from "../entities/Post";

export interface IPostRepository {
  create(post: Post): Promise<Post>;
  update(post: Post): Promise<Post>;
  delete(id: string): Promise<boolean>;
  findAuthorByid(id: string): Promise<Post[]>;
}
