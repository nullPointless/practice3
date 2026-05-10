import { Report } from "../domain/entities/Report";
import { ReportRepo } from "../domain/interfaces/ReportRepo";
import { UserRepo } from "../domain/interfaces/UserRepo";
import { TodoRepo } from "../domain/interfaces/TodoRepo";

export class ReportTodoUseCase {
  constructor(
    private userRepo: UserRepo,
    private reportRepo: ReportRepo,
    private todoRepo: TodoRepo,
  ) {}

  async execute(userId: number, todoId: number, description: string) {
    const user = await this.userRepo.findById(userId);
    const todo = await this.todoRepo.findById(todoId);

    const newReport = new Report(0, user, todo, description, new Date());
    await this.reportRepo.save(newReport);
  }
}
