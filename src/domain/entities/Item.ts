import { User } from "./User";

export class Item {
  constructor(
    private id: number,
    private name: string,
    private price: number,
    private createdAt: Date,
  ) {}

  getId(): number {
    return this.id;
  }

  getPrice(): number {
    return this.price;
  }

  applyDiscount(user: User): number {
    if (!user.isPremium()) {
      throw new Error(
        "You need to have a subcription to apply for a discount!",
      );
    }
    const newPrice = this.price * 0.3;
    this.price = newPrice;
    return newPrice;
  }
}
