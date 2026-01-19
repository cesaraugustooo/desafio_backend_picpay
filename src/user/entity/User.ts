export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public cpf: string,
        public password: string,
        public saldo: number
    ) {}

    meuSaldo(){
        return this.saldo;
    }
}