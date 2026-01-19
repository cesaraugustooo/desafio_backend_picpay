export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public cpf: string,
        public password: string,
        public saldo: number
    ) {}
}

export interface CreateIUser {
    name: string,
    email: string,
    cpf: string,
    password: string,
}