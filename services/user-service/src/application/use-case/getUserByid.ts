import { User } from "../../domain/entities/User";
import { UserRepository } from "./../../domain/repositories/user-repositories-interface";
export const getUser = async (
  UserRepository: UserRepository,
  id: string
): Promise<User> => {
  const user = await UserRepository.findById(id);
  if (!user) {
    throw new Error("user not found for the given id");
  }
  return user;
};
