import { prisma } from "../../../prisma/database.js";
import type { Irepository } from "../../domain/repositorys/repository.interface.js";
import { User, type CreateIUser } from "../../domain/entitys/User.js";
import { hash } from "../../utils/bcript.js";

export class PrismaRepository implements Irepository { 

    async create(data: CreateIUser): Promise<User> {
        const user = await prisma.user.create({data: {data}});

        return user;
    }

    async findByCpf(cpf: string): Promise<User> {
        return await prisma.user.findUnique({where:{cpf}})
    }

    async findByEmail(email: string): Promise<User> {
        return await prisma.user.findUnique({where:{email}})
    }
}