import { Favorite } from "../domain/entities/Favorite";
import { FavoriteRepo } from "../domain/interfaces/FavoriteRepo";
import { MovieService } from "../domain/interfaces/MovieService";
import { UserRepo } from "../domain/interfaces/UserRepo";

export class AddMovieToFavoritesUseCase {
  constructor(
    private movieService: MovieService,
    private userRepo: UserRepo,
    private favRepo: FavoriteRepo,
  ) {}

  async execute(userId: number, movieId: number) {
    const user = await this.userRepo.findById(userId);
    const movie = await this.movieService.findById(movieId);

    if (!user) throw new Error("User not found!");
    if (!movie) throw new Error("Movie not found!");

    const exists = await this.favRepo.find(userId, movieId);
    if (exists) throw new Error("Movie already in favorites!");

    const newFavorite = new Favorite(0, user, movie, new Date());
    await this.favRepo.save(newFavorite);
  }
}
