interface Transacao {
    value: number,
    payee_id: string
}

export interface Carteira {
    id: string,
    name: string,
    email: string,
    saldo: number,
    transacoes: Transacao[]
}