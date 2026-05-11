import { Favoritable } from "../interfaces/Favoritable";

export class Movie implements Favoritable {
  constructor(private id: number) {}

  getId(): number {
    return this.id;
  }
}
