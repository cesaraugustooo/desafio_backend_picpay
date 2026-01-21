import type { CreateIUser, ResponseUser, User, ValueInterface } from "../../domain/entitys/User.js";

export interface Irepository {
    create(data: User): Promise<ResponseUser>,
    findByEmail(email: string): Promise<ResponseUser | null>,
    findByCpf(cpf: string): Promise<ResponseUser | null>, 
    findById(id: string): Promise<ResponseUser | null>
    updateUser(id: string, value: ValueInterface, tx?: any): Promise<boolean>
}