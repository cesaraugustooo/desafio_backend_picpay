import type { IHtppContext } from "@aplication/ports/controllers/controller.interface.js";
import type { ITransaction } from "@domain/entitys/Transaction.js";
import type { CreateTransactionCase } from "@useCases/transactions/createTransaction/create.transaction.case.js";
import type { ResponseTransactionDTO } from "./create.transaction.dto.js";

export class TransactionController {
    constructor (
        private readonly service: CreateTransactionCase
    ) {}

    async create (ctx: IHtppContext) {
        try {
            const body = ctx.getRquest().body;
                
            const transaction = await this.service.create(body);

            return ctx.send(201,transaction);
        } catch (error) {
            ctx.next(error);
        }
    }
}