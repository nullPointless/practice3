import { Subscription } from "../entities/Subscription";

export interface SubscriptionRepo {
  save(sub: Subscription): Promise<Subscription>;
}
