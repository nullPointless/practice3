import { User } from "../entities/User";

export interface UserRepo {
  save(user: User): Promise<User>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<User>;
}
