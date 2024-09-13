import { createUser } from "./../use-case/createUser";

import { UserRepository } from "../../domain/repositories/user-repositories-interface";
import { User } from "../../domain/entities/User";
import { getUser } from "../use-case/getUserByid";

export class UserService {
  constructor(private userRepository: UserRepository) {}
  async createUser(userData: {
    username: string;
    email: string;
    password: string;
  }): Promise<User> {
    return createUser(this.userRepository, userData);
  }
  async getUser(userRepository: UserRepository, id: string): Promise<User> {
    return getUser(userRepository, id);
  }
}
