import type { ITransaction, ITransactionCreate } from "@domain/entitys/Transaction.js";
import type { ITransactionRepository } from "../../../repositorys/transaction.repository.interface.js";
import type { Irepository } from "../../../repositorys/user.repository.interface.js";
import { AppError } from "../../../../errorHandler.js";

export class CreateTransactionCase {
    constructor (
        private readonly transactionRepository: ITransactionRepository,
        private readonly userRepository: Irepository,
    ) {}

    async create(data: ITransactionCreate){
        const payer = this.userRepository.findById(data.payer_id);
        const payee = this.userRepository.findById(data.payee_id);

        if(!payer){
            throw new AppError("payer nao encontrado",404);
        }

        if(!payee){
            throw new AppError("payee nao encontrado",404);
        }


        
    }
}
