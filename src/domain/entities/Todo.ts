import { Reportable } from "../interfaces/Reportable";
import { Saveable } from "../interfaces/Saveable";
import { User } from "./User";

export class Todo implements Saveable, Reportable {
  constructor(
    private id: number,
    private title: string,
    private user: User,
    private createdAt: Date,
  ) {}

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getUser(): User {
    return this.user;
  }
}
