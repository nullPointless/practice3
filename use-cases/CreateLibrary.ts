import { Library } from "../domain/entities/Library";
import { LibraryRepo } from "../domain/interfaces/LibraryRepo";
import { UserRepo } from "../domain/interfaces/UserRepo";

export class CreateLibraryUseCase {
  constructor(
    private libRepo: LibraryRepo,
    private userRepo: UserRepo,
  ) {}

  async execute(name: string, userId: number) {
    const user = await this.userRepo.findById(userId);

    if (!user.canCreateLibrary())
      throw new Error("You cannot create a new library");

    const newLib = new Library(0, name, user, new Date());
    await this.libRepo.save(newLib);
  }
}
