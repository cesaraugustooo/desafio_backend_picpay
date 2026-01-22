import type { TransactionDBInterface } from "@aplication/interfaces/transaction.interface.js";
import { prisma } from "../../../../prisma/database.js";

export class PrismaTransactionManager implements TransactionDBInterface {
   async transactionManager<T>(callback: (tx: any) => Promise<T>): Promise<T> {
       
    return await prisma.$transaction( async (prismaTransaction) => {
        return await callback(prismaTransaction)
    });
   }
}