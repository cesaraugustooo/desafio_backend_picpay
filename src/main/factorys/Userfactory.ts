import { PrismaRepository } from "@infra/adapters/repositories/prisma/user/prisma.user.adapter.js";
import { CreateUserCase } from "../../aplication/useCases/user/createUser/create.user.case.js";
import { UserController } from "@controllers/user/create.user.controller.js";
import { GetCarteiraUseCase } from "../../aplication/useCases/user/getCarteira/get.carteira.case.js";
import { PrismaTransactionRepository } from "@infra/adapters/repositories/prisma/transaction/prisma.transacao.adapter.js";

// Criar usuario

const repository = new PrismaRepository();
const transactionRepository = new PrismaTransactionRepository();
const createuseCase = new CreateUserCase(repository);
const carteiraCase = new GetCarteiraUseCase(transactionRepository);
const createUserController = new UserController(createuseCase,carteiraCase) 

export {
    createUserController
}