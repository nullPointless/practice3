import { User } from "../domain/entities/User";
import { UserRepo } from "../domain/interfaces/UserRepo";

export class GetUserInfoUseCase {
  constructor(private userRepo: UserRepo) {}

  async execute(userId: number): Promise<User> {
    // Check for cache hit

    // If cace miss:
    const user = await this.userRepo.findById(userId);
    if (!user) throw Error("User not found");

    // Add user info to cache
    return user;
  }
}
