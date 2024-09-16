import { UpdatePostDto } from "./../dto/update-post-dto";
import { createPostDto } from "./../dto/create-post-dto";
import { Post } from "../../domain/entities/Post";
import { PostId } from "../../domain/value-objects/post-id";
import { IPostService } from "../interface/post-service.inerface";
import { DeletePostDto } from "../dto/delete-post-dto";

export class PostService implements IPostService {
  constructor(private postRepository: IPostService) {}

  // Create a new Post
  async createPost(createPostDto: createPostDto): Promise<Post> {
    const post = new Post(
      createPostDto.id,
      createPostDto.title,
      createPostDto.content,
      createPostDto.authorid,
      new Date(),
      new Date()
    );
    return this.postRepository.createPost(post);
  }

  // Retrieve a Post by ID
  async getPost(id: string): Promise<Post> {
    const postId = new PostId(id);
    const post = await this.postRepository.getPost(postId.toString());
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  }

  async updatePost(updatePostDto: UpdatePostDto): Promise<Post> {
    const postId = new PostId(updatePostDto?.id);
    const post = await this.postRepository.getPost(postId.toString());
    if (!post) {
      throw new Error("Post not found");
    }
    if (updatePostDto.title) post.title = updatePostDto.title;
    if (updatePostDto.content) post.content = updatePostDto.content;
    post.updatedAt = new Date();
    return this.postRepository.updatePost(post);
  }
  async deletePost(deletePostDto: DeletePostDto): Promise<boolean> {
    const postId = new PostId(deletePostDto.id);
    return this.postRepository.deletePost(postId);
  }

  // Get all Posts by a specific author
  async getPostsByAuthor(authorId: string): Promise<Post[]> {
    return this.postRepository.getPostsByAuthor(authorId);
  }
}
