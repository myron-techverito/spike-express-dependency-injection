import { GET, route } from "awilix-express";
import { Request, Response } from "express";
import { TaskService as UserService } from "../service/userService";

@route("/user")
export class TaskController {
  constructor(private readonly userService: UserService) {}

  @GET()
  getHelloTask(req: Request, res: Response) {
    return res.json({ mssg: "hello task" });
  }

  @route("/all")
  @GET()
  getAllTask(req: Request, res: Response) {
    return res.json(this.userService.getAllUsers());
  }
}
