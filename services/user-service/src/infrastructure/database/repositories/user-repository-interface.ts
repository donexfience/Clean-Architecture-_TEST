import { Iuser, UserModel } from "./../mongodb/models/userModel";
import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/user-repositories-interface";

export class mongoDBUserRepository implements UserRepository {
  private toUser(userDoc: Iuser): User {
    return new User({
      id: userDoc._id.toString(),
      username: userDoc.username,
      email: userDoc.email,
      password: userDoc.password,
    });
  }
  async create(user: User): Promise<User> {
    const userModel = new UserModel(user);
    const savedUser = await userModel.save();
    return this.toUser(savedUser);
  }

  async findById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id).lean();
    return user ? this.toUser(user) : null;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email }).lean();
    return user ? this.toUser(user) : null;
  }
  async update(user: User): Promise<User> {
    const updateduser = await UserModel.findByIdAndUpdate(user.id, user, {
      new: true,
    }).lean();
    if (!updateduser) {
      throw new Error("user not found");
    }
    return this.toUser(updateduser);
  }
  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndUpdate(id);
  }
}
