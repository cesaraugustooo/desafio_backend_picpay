import { randomUUID } from "node:crypto";

export class User {
    public readonly id: string;
    private _saldo: number;
    private _password: string; 

    constructor(
        public name: string,
        public email: string,
        public cpf: string,
        password: string, 
        id?: string,
        saldoExistente?: number
    ) {
        this.id = id ?? randomUUID();
        this._password = password; 
        this._saldo = saldoExistente ?? 0;
    }

    get password() { 
        return this._password; 
    }

    get saldo() { 
        return this._saldo; 
    }

    public toJson(){
        return {
            id: this.id,
            name: this.name,
            password: this.password,
            cpf: this.cpf,
            email: this.email,
            saldo: this.saldo
        }
    }
}

export interface CreateIUser {
    name: string,
    email: string,
    cpf: string,
    password: string,
}

export interface ResponseUser {
    name: string,
    email: string,
    cpf: string,
}