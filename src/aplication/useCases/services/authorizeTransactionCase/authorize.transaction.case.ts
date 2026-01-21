import type { TransactionAuthorizeGateway } from "@aplication/ports/gateways/transaction.authorize.gateway.js";
import { DomainError } from "@domain/errorHandler.js";

export class AuthorizeTransactionCase{

    constructor (
        private readonly authorize: TransactionAuthorizeGateway
    ) {}

    async handle(): Promise<void> {
        const authorize = await this.authorize.authorize();

        if(authorize === false){
            throw new DomainError("Transacao nao autorizada pelo autorizador externo",401);
        }
    }
}