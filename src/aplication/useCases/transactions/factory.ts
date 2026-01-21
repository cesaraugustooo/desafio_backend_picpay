import { PrismaTransactionRepository } from "@infra/repositories/prisma/transaction/prisma.transacao.adapter.js";
import { CreateTransactionCase } from "./createTransaction/create.transaction.case.js";
import { PrismaRepository } from "@infra/repositories/prisma/user/prisma.user.adapter.js";
import { PrismaTransactionManager } from "@infra/repositories/transaction.db.adapter.js";
import { TransactionController } from "@controllers/transactions/create.transaction.controller.js";
import { AuthorizeTransactionCase } from "@useCases/services/authorizeTransactionCase/authorize.transaction.case.js";

const TransactionRepository = new PrismaTransactionRepository();
const UserRepository = new PrismaRepository();
const TransactionDBManager = new PrismaTransactionManager();
const AuthorizeTransactionMok = new AuthorizeTransactionCase();
const createTransactionCase = new CreateTransactionCase(TransactionRepository, UserRepository, TransactionDBManager, AuthorizeTransactionMok);

const CreateTransactionController = new TransactionController(createTransactionCase);

export { CreateTransactionController }