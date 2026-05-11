import { AddMovieToFavoritesUseCase } from "../use-cases/AddMovieToFavorites";
import { Request, Response } from "express";

export class AddMovieToFavoritesHandler {
  constructor(private addMovieToFavoritesUseCase: AddMovieToFavoritesUseCase) {}

  async hanlder(req: Request, res: Response) {
    try {
      const { userId, movieId } = req.body;

      const response = await this.addMovieToFavoritesUseCase.execute(
        userId,
        movieId,
      );
      res.json(response);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}
