import { MovieService } from "../domain/interfaces/MovieService";

export class TMDBMovieService implements MovieService {
  async get(page?: number): Promise<void> {}

  async getPopular(): Promise<void> {}

  async getTopTen(): Promise<void> {}
}
