import type { CreateIUser, User } from "../entitys/User.js";

export interface Irepository {
    create(data: CreateIUser): Promise<User>,
    findByEmail(email: string): Promise<User | null>,
    findByCpf(cpf: string): Promise<User | null> 
}