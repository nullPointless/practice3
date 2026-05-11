import { Request, Response } from "express";
import { GetPopularMoviesUseCase } from "../use-cases/GetPopularMoviesUseCase";

export class GetPopularMoviesHandler {
  constructor(private getPopularMoviesUseCase: GetPopularMoviesUseCase) {}

  async handler(req: Request, res: Response) {
    try {
      const response = await this.getPopularMoviesUseCase.execute();
      res.json(response);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}
