import { Saveable } from "../interfaces/Saveable";
import { Library } from "./Library";
import { User } from "./User";

export class Save {
  constructor(
    private id: number,
    private user: User,
    private target: Saveable,
    private library: Library,
    private createdAt: Date,
  ) {}

  getId(): number {
    return this.id;
  }
}
