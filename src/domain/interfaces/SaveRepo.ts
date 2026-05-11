import { Save } from "../entities/Save";

export interface SaveRepo {
  save(save: Save): Promise<Save>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Save>;
}
