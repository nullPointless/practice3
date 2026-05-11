import { User } from "./User";

export class Subscription {
  constructor(
    private id: number,
    private user: User,
    private isActive: boolean,
    private createdAt: Date,
  ) {}

  getId(): number {
    return this.id;
  }

  getIsActive(): boolean {
    return this.isActive;
  }

  activate() {
    this.isActive = true;
    this.user.makePremium();
  }

  cancel() {
    this.isActive = false;
  }
}
