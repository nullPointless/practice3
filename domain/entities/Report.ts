import { Reportable } from "../interfaces/Reportable";
import { User } from "./User";

export class Report {
  constructor(
    private id: number,
    private user: User,
    private target: Reportable,
    private description: string,
    private createdAt: Date,
  ) {}
}
