import { Follow } from "../entities/Follow";

export interface FollowRepo {
  save(follow: Follow): Promise<Follow>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Follow>;
}
