import { Save } from "../domain/entities/Save";
import { LibraryRepo } from "../domain/interfaces/LibraryRepo";
import { SaveRepo } from "../domain/interfaces/SaveRepo";
import { TodoRepo } from "../domain/interfaces/TodoRepo";
import { UserRepo } from "../domain/interfaces/UserRepo";

export class SaveTodoUseCase {
  constructor(
    private saveRepo: SaveRepo,
    private userRepo: UserRepo,
    private todoRepo: TodoRepo,
    private libRepo: LibraryRepo,
  ) {}

  async execute(userId: number, todoId: number, libId: number) {
    const user = await this.userRepo.findById(userId);
    const todo = await this.todoRepo.findById(todoId);
    const lib = await this.libRepo.findById(libId);

    const newSave = new Save(0, user, todo, lib, new Date());
    await this.saveRepo.save(newSave);
  }
}
