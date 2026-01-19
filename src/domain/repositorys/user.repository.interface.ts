import type { CreateIUser, ResponseUser, User } from "../entitys/User.js";

export interface Irepository {
    create(data: User): Promise<ResponseUser>,
    findByEmail(email: string): Promise<ResponseUser | null>,
    findByCpf(cpf: string): Promise<ResponseUser | null> 
}