import { Topic } from "../entities/Topic";

export interface TopicRepo {
  save(topic: Topic): Promise<Topic>;
  delete(id: number): Promise<Topic>;
  findById(id: number): Promise<Topic>;
}
