import type { ITransactionCreate, ITransaction, Transaction } from "@domain/entitys/Transaction.js";
import type { ITransactionRepository } from "@aplication/interfaces/repositorys/transaction.repository.interface.js";
import { prisma } from "../../../../../../prisma/database.js";
import type { UserByToken } from "@aplication/interfaces/user.by.token.js";



export class PrismaTransactionRepository implements ITransactionRepository {

    async create(data: ITransactionCreate, tx: any): Promise<ITransaction> {
        return await tx.transaction.create({data});
    }

    async getByUser(user: UserByToken): Promise<ITransaction[]> {
        return await prisma.transaction.findMany({
            where: {
            OR: [
                {payee_id: user.id},
                {payer_id: user.id}
            ]
        }});
    }
} 