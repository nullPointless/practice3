import { FollowTopicUseCase } from "../use-cases/FollowTopic";
import { Request, Response } from "express";

export class FollowTopicHandler {
  constructor(private followTopicUseCase: FollowTopicUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { followerId, topicId } = req.body;
      const response = await this.followTopicUseCase.execute(
        followerId,
        topicId,
      );
      res.json(response);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}
