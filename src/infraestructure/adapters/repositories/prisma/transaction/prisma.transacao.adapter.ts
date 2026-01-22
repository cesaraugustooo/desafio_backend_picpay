import type { ITransactionCreate, ITransaction } from "@domain/entitys/Transaction.js";
import type { ITransactionRepository } from "../../../../../aplication/interfaces/repositorys/transaction.repository.interface.js";

export class PrismaTransactionRepository implements ITransactionRepository {

    async create(data: ITransactionCreate, tx: any): Promise<ITransaction> {
        return await tx.transaction.create({data});
    }
} 