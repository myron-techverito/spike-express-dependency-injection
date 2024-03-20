import { UserRepo } from "../repo/userRepo";

export class TaskService {
  constructor(private readonly userRepo: UserRepo) {}

  getAllUsers() {
    return this.userRepo.getAll();
  }
}
