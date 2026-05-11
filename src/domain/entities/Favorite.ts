import { Favoritable } from "../interfaces/Favoritable";
import { User } from "./User";

export class Favorite {
  constructor(
    private id: number,
    private user: User,
    private target: Favoritable,
    private createdAt: Date,
  ) {}
}
