import { randomUUID } from "node:crypto";
import { DomainError } from "@domain/errorHandler.js";

export class User {
    public readonly id: string;
    private _saldo: number;
    private _password: string; 

    constructor(
        public name: string,
        public email: string,
        public cpf: string,
        public tipo: "comum" | "lojista",
        password: string, 
        id?: string,
        saldo?: number
    ) {
        this.id = id ?? randomUUID();
        this._password = password; 
        this._saldo = saldo ?? 50;
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
            saldo: this.saldo,
            tipo: this.tipo
        }
    }

    public debito(value: number) {
        if(this.tipo == "lojista"){
            throw new DomainError("apenas usuario comuns podem debitar.",401);
        }

        if(value > this.saldo){
            throw new DomainError("saldo insuficiente para completar a transação.",401);
        }

        this._saldo -= value;
    }

    public credito(value: number) {
        this._saldo += value
    }

    static contruct (data: UserByContructor){
        return new User(data.name, data.email, data.cpf, data.tipo, data.password, data.id, data.saldo);
    }
}

export interface UserByContructor {
    id: string,
    name: string,
    email: string,
    cpf: string,
    tipo: "comum" | "lojista",
    password: string,
    saldo: number
}

export interface CreateIUser {
    name: string,
    email: string,
    cpf: string,
    tipo: "comum" | "lojista",
    password: string,
}

export interface ResponseUser {
    name: string,
    email: string,
    cpf: string,
    saldo?: number
}