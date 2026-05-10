import { Todo } from "../entities/Todo";

export interface TodoRepo {
  save(todo: Todo): Promise<Todo>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Todo>;
}
