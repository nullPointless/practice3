import { Followable } from "../interfaces/Followable";

export class User implements Followable {
  constructor(
    private id: number,
    private name: string,
    private email: string,
    private _isPremium = false,
    private libraryLimit = 5,
    private libraryCount = 0,
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  updateEmail(newEmail: string) {
    this.email = newEmail;
  }

  updateName(newName: string) {
    this.name = newName;
  }

  isPremium(): boolean {
    return this._isPremium;
  }

  makePremium(): boolean {
    this._isPremium = true;
    this.libraryLimit = 20;
    return this._isPremium;
  }

  canCreateTodo(): boolean {
    if (this._isPremium) return true;
    return false;
  }

  canCreateLibrary(): boolean {
    if (this.libraryCount >= this.libraryLimit && this.libraryLimit == 5) {
      throw new Error("You need to upgrade to Premium to make more libraries");
    }
    if (this.libraryCount >= this.libraryLimit) return false;
    return true;
  }
}
