import { randomUUID } from "node:crypto"

export class Transaction {
    public readonly id: string

    constructor (
        public payer_id: string,
        public payee_id: string,
        public value: number,
        id?: string
    ) {
        this.id = id ?? randomUUID()
    }

    public toJson() {
        return {
            id: this.id,
            value: this.value,
            payer_id: this.payer_id,
            payee_id: this.payee_id,
        }
    }

}

export interface ITransactionCreate {
    value: number,
    payer_id: string,
    payee_id: string
}

export interface ITransaction {
    id: string
    value: number,
    payer_id: string,
    payee_id: string
}