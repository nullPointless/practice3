import { Follow } from "../domain/entities/Follow";
import { FollowRepo } from "../domain/interfaces/FollowRepo";
import { TopicRepo } from "../domain/interfaces/TopicRepo";
import { UserRepo } from "../domain/interfaces/UserRepo";

export class FollowTopicUseCase {
  constructor(
    private userRepo: UserRepo,
    private topicRepo: TopicRepo,
    private followRepo: FollowRepo,
  ) {}

  async execute(followerId: number, topicId: number) {
    const follower = await this.userRepo.findById(followerId);
    const topic = await this.topicRepo.findById(topicId);

    const newFollow = new Follow(0, follower, topic, "topic", new Date());
    await this.followRepo.save(newFollow);
  }
}
