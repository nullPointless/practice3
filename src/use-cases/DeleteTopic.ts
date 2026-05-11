import { TopicRepo } from "../domain/interfaces/TopicRepo";

export class DeleteTopicUseCase {
  constructor(private topicRepo: TopicRepo) {}
  async execute(topicId: number, userId: number) {
    const topic = await this.topicRepo.findById(topicId);
    if (!topic) throw new Error("Topic not found!");
    const creator = topic.getCreator();

    if (creator.getId() !== userId)
      throw new Error("You are not a creator of this topic!");

    await this.topicRepo.delete(topicId);
  }
}
