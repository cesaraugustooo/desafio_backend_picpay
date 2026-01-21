import { DomainError } from "@domain/errorHandler.js";

interface Data {
    authorization: boolean
}

interface IAuthorizeTransaction {
    status: "success" | "fail"
    data: Data
}

export class AuthorizeTransactionCase {
    constructor (private url = "https://util.devi.tools/api/v2/authorize") {}

    async handle(): Promise<void> {
        const api = await fetch(this.url);
        const response = await api.json() as IAuthorizeTransaction;

        if(response.data.authorization == false){
            throw new DomainError("Transacao nao autorizada pelo autorizador externo",401);
        }
    }
}