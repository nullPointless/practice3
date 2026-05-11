import { Movie } from "../domain/entities/Movie";
import { MovieService } from "../domain/interfaces/MovieService";

export class GetPopularMoviesUseCase {
  constructor(private movieService: MovieService) {}

  async execute(): Promise<Movie[]> {
    // Check cache

    // If cache miss:
    const movies = await this.movieService.getPopular();
    if (!movies) throw new Error("No movies found!");

    // Save movies to cache
    return movies;
  }
}
