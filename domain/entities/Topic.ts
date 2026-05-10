import { Followable } from "../interfaces/Followable";
import { User } from "./User";

export class Topic implements Followable {
  constructor(
    private id: number,
    private creator: User,
    private name: string,
    private createdAt: Date,
  ) {}

  getId(): number {
    return this.id;
  }
}
