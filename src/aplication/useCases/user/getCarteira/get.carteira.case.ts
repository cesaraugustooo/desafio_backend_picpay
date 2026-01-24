import type { Carteira } from "@aplication/interfaces/carteira.interface.js";
import type { ITransactionRepository } from "@aplication/interfaces/repositorys/transaction.repository.interface.js";
import type { Irepository } from "@aplication/interfaces/repositorys/user.repository.interface.js";
import type { UserByToken } from "@aplication/interfaces/user.by.token.js";

export class GetCarteiraUseCase {
    constructor(
        private readonly transactionRepository: ITransactionRepository
    ) { }

    async getCarteira(user: UserByToken): Promise<Carteira> {
        const transactions = await this.transactionRepository.getByUser(user);

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            saldo: user.saldo,
            transacoes: transactions
        }
    }
}