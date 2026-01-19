import { UserController } from "./controllers/user.controller.js";
import { UserRepository } from "./reposytory/user.repository.js";
import { UserService } from "./service/user.service.js";

export const repository = new UserRepository()
export const userService = new UserService(repository)
export const userController = new UserController(userService);