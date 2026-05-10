import { Todo } from "../domain/entities/Todo";
import { User } from "../domain/entities/User";
import { TodoRepo } from "../domain/interfaces/TodoRepo";

export class SqlTodoRepo implements TodoRepo {
  async save(todo: Todo): Promise<Todo> {
    const mockTodo = new Todo(0, "title", {} as User, new Date());
    return mockTodo;
  }

  async delete(id: number): Promise<void> {}

  async findById(id: number): Promise<Todo> {
    const mockTodo = new Todo(0, "title", {} as User, new Date());
    return mockTodo;
  }
}
