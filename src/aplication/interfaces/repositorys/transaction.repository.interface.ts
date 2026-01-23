import type { ITransaction, ITransactionCreate, Transaction } from "@domain/entitys/Transaction.js";

export interface UserByToken {
    id: string,
    name: string,
    email: string,
    saldo: number
}
export interface ITransactionRepository {
    create(data: ITransactionCreate, tx: any): Promise<ITransaction>;
    getByUser(user: UserByToken): Promise<ITransaction[]> 
}