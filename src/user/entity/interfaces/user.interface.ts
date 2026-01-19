export interface IUser {
    id: string,
    name: string,
    email: string,
    cpf: string,
    password?: string,
    saldo?: number
}

export interface CreateIUser {
    name: string,
    email: string,
    cpf: string,
    password: string,
}