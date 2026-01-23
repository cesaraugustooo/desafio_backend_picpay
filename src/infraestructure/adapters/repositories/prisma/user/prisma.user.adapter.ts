import { prisma } from "../../../../../../prisma/database.js";
import type { Irepository } from "@interfaces/repositorys/user.repository.interface.js";
import { User, type CreateIUser, type ResponseUser, type UserByContructor } from "@domain/entitys/User.js";

export class PrismaRepository implements Irepository { 

    async create(data: User): Promise<ResponseUser> {
        const user = await prisma.user.create({data: data.toJson()});

        return user;
    }

    async findByCpf(cpf: string): Promise<UserByContructor |null> {
        const user = await prisma.user.findUnique({where:{cpf}});

        if(!user){
            return null;
        }

        return user;
    }

    async findByEmail(email: string): Promise< UserByContructor |null> {
        const user = await prisma.user.findUnique({where:{email}});

        if(!user){
            return null;
        }

        return user;
    }

    async findById(id: string): Promise<UserByContructor | null> {
        const user = await prisma.user.findUnique({where:{id}});

        if(!user){
            return null;
        }

        return user;
    }

    async updateUser(id: string, value: number,tx: any): Promise<boolean> {
        await tx.user.update({where:{id},data:{ saldo: value }})
        return true
    }
}