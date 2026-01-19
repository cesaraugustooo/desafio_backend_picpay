import { PrismaRepository } from "@infra/repositories/prisma.adapter.js";
import { CreateUserCase } from "./createUser/create.user.case.js";
import { UserController } from "./createUser/create.user.controller.js";

// Criar usuario

const repository = new PrismaRepository();
const createuseCase = new CreateUserCase(repository);
const createUserController = new UserController(createuseCase) 

export {
    createUserController
}