import { Followable } from "../interfaces/Followable";
import { User } from "./User";

export class Follow {
  constructor(
    private id: number,
    private follower: User,
    private following: Followable,
    private type: "user" | "topic",
    private createdAt: Date,
  ) {}

  getId(): number {
    return this.id;
  }
}
