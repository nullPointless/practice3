import { Library } from "../entities/Library";

export interface LibraryRepo {
  save(lib: Library): Promise<Library>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Library>;
}
