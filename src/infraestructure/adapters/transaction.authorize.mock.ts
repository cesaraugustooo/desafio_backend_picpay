import type { TransactionAuthorizeGateway } from "@aplication/ports/gateways/transaction.authorize.gateway.js";
import { AppError } from "../errorHandler.js";

interface Data {
    authorization: boolean
}

interface IAuthorizeTransaction {
    status: "success" | "fail"
    data: Data
}


export class AuthorizeTransactionMockAdapter implements TransactionAuthorizeGateway {
    constructor ( 
        private readonly url = "https://util.devi.tools/api/v2/authorize"
    ) {}
    async authorize(): Promise<boolean> {
        try{
            const api = await fetch(this.url);
            const response = await api.json() as IAuthorizeTransaction;
            
            if(response.data.authorization === false){
                return false;
            }

            return true;
        }catch(error){
            throw new AppError("Url indisponivel", 404);
        }    
    }
}