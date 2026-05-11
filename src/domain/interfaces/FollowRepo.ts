import { Follow } from "../entities/Follow";
import { Followable } from "./Followable";

export interface FollowRepo {
  save(follow: Follow): Promise<Follow>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Follow>;
  find(followerId: number, followingId: number): Promise<Follow>;
}
