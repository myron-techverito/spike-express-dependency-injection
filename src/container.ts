import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { TaskService as UserService } from "./service/userService";
import { UserRepo } from "./repo/userRepo";

export const loadContainer = (app: Application) => {
  const Container = createContainer({
    injectionMode: "CLASSIC",
  });

  Container.register({
    userService: asClass(UserService).scoped(),
  });

  Container.register({
    userRepo: asClass(UserRepo).scoped(),
  });

  app.use(scopePerRequest(Container));
};
