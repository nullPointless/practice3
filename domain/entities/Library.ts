import { Favoritable } from "../interfaces/Favoritable";
import { User } from "./User";

export class Library implements Favoritable {
  constructor(
    private id: number,
    private name: string,
    private user: User,
    private createdAt: Date,
  ) {}

  getId(): number {
    return this.id;
  }
}
