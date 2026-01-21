import type { ITransactionCreate, ITransaction } from "@domain/entitys/Transaction.js";
import type { ITransactionRepository } from "../../../../aplication/repositorys/transaction.repository.interface.js";

export class PrismaTransactionRepository implements ITransactionRepository {

    async create(data: ITransactionCreate, payer: string, tx: any): Promise<ITransaction> {
        return await tx.transaction.craete(data);
    }

}