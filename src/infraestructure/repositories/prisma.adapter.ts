import { prisma } from "../../../prisma/database.js";
import type { Irepository } from "@domain/repositorys/user.repository.interface.js";
import { User, type CreateIUser, type ResponseUser } from "@domain/entitys/User.js";

export class PrismaRepository implements Irepository { 

    async create(data: User): Promise<ResponseUser> {
        const user = await prisma.user.create({data: data.toJson()});

        return user;
    }

    async findByCpf(cpf: string): Promise<ResponseUser | null> {
        const user = await prisma.user.findUnique({where:{cpf}});

        if(!user){
            return null;
        }

        return user;
    }

    async findByEmail(email: string): Promise<ResponseUser | null> {
        const user = await prisma.user.findUnique({where:{email}});

        if(!user){
            return null;
        }

        return user;
    }
}