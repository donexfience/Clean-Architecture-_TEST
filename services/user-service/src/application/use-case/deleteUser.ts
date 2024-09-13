import { User } from "../../domain/entities/User";
import { UserRepository } from "./../../domain/repositories/user-repositories-interface";
export const deleteUser = async (
  userRepository: UserRepository,
  userId: string
): Promise<void> => {
  await userRepository.delete(userId);
};
