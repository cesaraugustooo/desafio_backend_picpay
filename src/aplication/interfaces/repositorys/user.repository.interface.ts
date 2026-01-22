import type { CreateIUser, ResponseUser, User, UserByContructor,  } from "../../../domain/entitys/User.js";

export interface Irepository {
    create(data: User): Promise<ResponseUser>,
    findByEmail(email: string): Promise<ResponseUser | null>,
    findByCpf(cpf: string): Promise<UserByContructor | null>, 
    findById(id: string): Promise<UserByContructor | null>
    updateUser(id: string, value: number, tx?: any): Promise<boolean>
}