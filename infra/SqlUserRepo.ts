import { User } from "../domain/entities/User";
import { UserRepo } from "../domain/interfaces/UserRepo";

export class SqlUserRepo implements UserRepo {
  async save(user: User): Promise<User> {
    const mockUser = new User(0, "name", "email");
    return mockUser;
  }

  async delete(id: number): Promise<void> {}

  async findById(id: number): Promise<User> {
    const mockUser = new User(0, "name", "email");
    return mockUser;
  }
}
