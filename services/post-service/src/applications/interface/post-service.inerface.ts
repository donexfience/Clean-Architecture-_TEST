import { getUser } from "./../../../../user-service/src/application/use-case/getUserByid";
import { DeletePostDto } from "./../dto/delete-post-dto";
import { Post } from "../../domain/entities/Post";
import { UpdatePostDto } from "../dto/update-post-dto";
import { createPostDto } from "./../dto/create-post-dto";
export interface IPostService {
  createPost(CreatePostDto: createPostDto): Promise<Post>;
  getPost(id: string): Promise<Post>;
  updatePost(UpdatePostDto: UpdatePostDto): Promise<Post>;
  deletePost(DeletePostDto: DeletePostDto): Promise<boolean>;
  getPostsByAuthor(authorId: string): Promise<Post[]>;
}
