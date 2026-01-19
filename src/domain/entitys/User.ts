import { randomUUID } from "node:crypto";

export class User {
    public readonly id: string;
    private saldo: number;
    
    constructor(
        public name: string,
        public email: string,
        public cpf: string,
        public password: string,
        id?: string,
        saldoExistente?: number
    ) {
        this.id = id ?? randomUUID();  
        
        this.saldo = saldoExistente ?? 0 
    }

    getSaldo(): number{
        return this.saldo;
    }
}

export interface CreateIUser {
    name: string,
    email: string,
    cpf: string,
    password: string,
}