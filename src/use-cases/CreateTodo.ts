import { Todo } from "../domain/entities/Todo";
import { TodoRepo } from "../domain/interfaces/TodoRepo";
import { UserRepo } from "../domain/interfaces/UserRepo";

export class CreateTodoUseCase {
  constructor(
    private todoRepo: TodoRepo,
    private userRepo: UserRepo,
  ) {}
  async execute(title: string, userId: number) {
    const user = await this.userRepo.findById(userId);

    if (!user.canCreateTodo()) throw new Error("You cannot create a Todo");

    const newTodo = new Todo(0, title, user, new Date());
    await this.todoRepo.save(newTodo);
  }
}
