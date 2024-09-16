import { Post } from "../../domain/entities/Post";
import { IpostDocument, PostModel } from "../database/models/post-model";
import { IPostRepository } from "./../../domain/repository/post-repository-interface";
export class PostRepositroy implements IPostRepository {
  async create(post: Post): Promise<Post> {
    const createPost = await PostModel.create(post);
    return this.mapToEntity(createPost);
  }
  async update(post: Post): Promise<Post> {
    const updatedPost = await PostModel.findByIdAndUpdate(post.id, post, {
      new: true,
    });
    if (!updatedPost) throw new Error("Post not found");
    return this.mapToEntity(updatedPost);
  }

  async delete(id: string): Promise<boolean> {
    const result = await PostModel.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }

  async findAuthorByid(authorId: string): Promise<Post[]> {
    const posts = await PostModel.find({ authorId });
    return posts.map(this.mapToEntity);
  }
  private mapToEntity(postDoc: IpostDocument): Post {
    return new Post(
      postDoc.id,
      postDoc.title,
      postDoc.content,
      postDoc.authorId,
      postDoc.createdAt,
      postDoc.updatedAt
    );
  }
}
