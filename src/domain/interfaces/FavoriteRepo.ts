import { Favorite } from "../entities/Favorite";

export interface FavoriteRepo {
  save(favorite: Favorite): Promise<Favorite>;
  find(userId: number, target: number): Promise<Favorite>;
}
