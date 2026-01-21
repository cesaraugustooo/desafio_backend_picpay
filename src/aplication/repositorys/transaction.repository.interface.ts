import type { ITransaction, ITransactionCreate } from "@domain/entitys/Transaction.js";

export interface ITransactionRepository {
    create(data: ITransactionCreate, payer: string, tx: any): Promise<ITransaction>
}