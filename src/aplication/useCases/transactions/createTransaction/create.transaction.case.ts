import type { ITransaction, ITransactionCreate } from "@domain/entitys/Transaction.js";
import type { ITransactionRepository } from "@aplication/repositorys/transaction.repository.interface.js";
import type { Irepository } from "@aplication/repositorys/user.repository.interface.js";
import { AppError } from "../../../../errorHandler.js";
import type { TransactionDBInterface } from "@controllers/interfaces/transaction.interface.js";
import { User, type ResponseUser } from "@domain/entitys/User.js";

export class CreateTransactionCase {
    constructor (
        private readonly transactionRepository: ITransactionRepository,
        private readonly userRepository: Irepository,
        private readonly transactionManager: TransactionDBInterface
    ) {}

    async create(data: ITransactionCreate){
        const payer = await this.userRepository.findById(data.payer_id);
        const payee = await this.userRepository.findById(data.payee_id);

        if(!payer){
            throw new AppError("payer nao encontrado",404);
        }

        if(!payee){
            throw new AppError("payee nao encontrado",404);
        }

        const payerInstance = User.contruct(payer);
        const payeeInstance = User.contruct(payee);

        const result = this.transactionManager.transactionManager(async (tx): Promise<ITransaction>=> {
            payerInstance.debito(data.value)
            payeeInstance.credito(data.value)

            await this.userRepository.updateUser(payerInstance.id, payerInstance.saldo, tx);
            await this.userRepository.updateUser(payeeInstance.id, payeeInstance.saldo, tx);

            return await this.transactionRepository.create(data,tx);
            
        }); 

        return result;
    }
}
