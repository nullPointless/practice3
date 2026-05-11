import { Follow } from "../domain/entities/Follow";
import { FollowRepo } from "../domain/interfaces/FollowRepo";
import { UserRepo } from "../domain/interfaces/UserRepo";

export class FollowUserUseCase {
  constructor(
    private userRepo: UserRepo,
    private followRepo: FollowRepo,
  ) {}

  async execute(followerId: number, followingId: number) {
    const follower = await this.userRepo.findById(followerId);
    const following = await this.userRepo.findById(followingId);

    const newFollow = new Follow(0, follower, following, "user", new Date());
    await this.followRepo.save(newFollow);
  }
}
