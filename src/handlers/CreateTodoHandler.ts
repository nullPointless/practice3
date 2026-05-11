import { CreateTodoUseCase } from "../use-cases/CreateTodo";
import { Request, Response } from "express";

export class CreateTodoHandler {
  constructor(private CreateTodoUseCase: CreateTodoUseCase) {}

  async handler(req: Request, res: Response) {
    try {
      const { title, userId } = req.body;
      const response = await this.CreateTodoUseCase.execute(title, userId);
      res.json(response);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}
