import { PrismaTransactionRepository } from "@infra/adapters/repositories/prisma/transaction/prisma.transacao.adapter.js";
import { CreateTransactionCase } from "@aplication/useCases/transactions/createTransaction/create.transaction.case.js";
import { PrismaRepository } from "@infra/adapters/repositories/prisma/user/prisma.user.adapter.js";
import { PrismaTransactionManager } from "@infra/adapters/repositories/transaction.db.adapter.js";
import { TransactionController } from "@controllers/transactions/create.transaction.controller.js";
import { AuthorizeTransactionCase } from "@useCases/transactions/authorizeTransactionCase/authorize.transaction.case.js";
import { AuthorizeTransactionMockAdapter } from "@infra/adapters/transaction.authorize.mock.js";

const TransactionRepository = new PrismaTransactionRepository();
const UserRepository = new PrismaRepository();
const TransactionDBManager = new PrismaTransactionManager();
const AuthorizeTransactionAdapter = new AuthorizeTransactionMockAdapter()
const authorizeTransactionCase = new AuthorizeTransactionCase(AuthorizeTransactionAdapter);
const createTransactionCase = new CreateTransactionCase(TransactionRepository, UserRepository, TransactionDBManager, authorizeTransactionCase);

const CreateTransactionController = new TransactionController(createTransactionCase);

export { CreateTransactionController }