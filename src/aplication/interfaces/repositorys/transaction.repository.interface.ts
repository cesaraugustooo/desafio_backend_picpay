import type { ITransaction, ITransactionCreate, Transaction } from "@domain/entitys/Transaction.js";
import type { UserByToken } from "../user.by.token.js";

export interface ITransactionRepository {
    create(data: ITransactionCreate, tx: any): Promise<ITransaction>;
    getByUser(user: UserByToken): Promise<ITransaction[]> 
}