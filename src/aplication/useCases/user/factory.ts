import { PrismaRepository } from "@infra/adapters/repositories/prisma/user/prisma.user.adapter.js";
import { CreateUserCase } from "./createUser/create.user.case.js";
import { UserController } from "@controllers/user/create.user.controller.js";

// Criar usuario

const repository = new PrismaRepository();
const createuseCase = new CreateUserCase(repository);
const createUserController = new UserController(createuseCase) 

export {
    createUserController
}