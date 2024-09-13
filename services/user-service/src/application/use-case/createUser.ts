import { User } from "../../domain/entities/User";
import { UserRepository } from "./../../domain/repositories/user-repositories-interface";
export const createUser = async (
  userRepository: UserRepository,
  userData: { username: string; email: string; password: string }
): Promise<User> => {
  const user = new User(userData);
  return await userRepository.create(user);
};
