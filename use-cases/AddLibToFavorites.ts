import { Favorite } from "../domain/entities/Favorite";
import { FavoriteRepo } from "../domain/interfaces/FavoriteRepo";
import { LibraryRepo } from "../domain/interfaces/LibraryRepo";
import { UserRepo } from "../domain/interfaces/UserRepo";

export class AddLibraryToFavoritesUseCase {
  constructor(
    private userRepo: UserRepo,
    private libRepo: LibraryRepo,
    private favRepo: FavoriteRepo,
  ) {}

  async execute(userId: number, libId: number) {
    const user = await this.userRepo.findById(userId);
    const lib = await this.libRepo.findById(libId);

    const newFav = new Favorite(0, user, lib, new Date());
    await this.favRepo.save(newFav);
  }
}
