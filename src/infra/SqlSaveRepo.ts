import { Library } from "../domain/entities/Library";
import { Save } from "../domain/entities/Save";
import { User } from "../domain/entities/User";
import { Saveable } from "../domain/interfaces/Saveable";
import { SaveRepo } from "../domain/interfaces/SaveRepo";

export class SqlSaveRepo implements SaveRepo {
  async save(save: Save): Promise<Save> {
    const mockSave = new Save(
      0,
      {} as User,
      {} as Saveable,
      {} as Library,
      new Date(),
    );
    return mockSave;
  }

  async delete(id: number): Promise<void> {}

  async findById(id: number): Promise<Save> {
    const mockSave = new Save(
      0,
      {} as User,
      {} as Saveable,
      {} as Library,
      new Date(),
    );
    return mockSave;
  }
}
