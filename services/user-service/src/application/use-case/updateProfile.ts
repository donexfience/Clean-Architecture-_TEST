import { User } from "../../domain/entities/User";
import { UserRepository } from "./../../domain/repositories/user-repositories-interface";
export const updateUser = async (
  UserRepository: UserRepository,
  user: User
): Promise<User> => {
  const updatedUser = await UserRepository.update(user);
  return updatedUser;
};
