import { Movie } from "../entities/Movie";

export interface MovieService {
  get(page?: number): Promise<void>;
  getPopular(): Promise<Movie[]>;
  getTopTen(): Promise<void>;
  getUpcoming(): Promise<Movie[]>;
  findById(id: number): Promise<Movie>;
}
