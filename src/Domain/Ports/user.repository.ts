import { User } from "../Entities/user.js";

export interface UserRepository {
  getAll(): User[];
  findById(id: number): User | undefined;
  create(user: User): User;
  update(user: User): Promise<void>;
  delete(id: number): void;
}