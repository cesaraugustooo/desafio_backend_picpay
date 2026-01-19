import { prisma } from "../../../prisma/database.js";
import type { CreateIUser } from "../entity/interfaces/user.interface.js";
import { User } from "../entity/User.js";

export class UserRepository {
    constructor (
        private ctx = prisma.user
    ) {}

    async create(data: CreateIUser){
        const user = await this.ctx.create({data: {...data,saldo: 0}});

        return new User( 
            user.id,
            user.name,
            user.email,
            user.cpf,
            user.password,
            user.saldo
        );
    }

    async findByEmail(email: string) {
        const user = await this.ctx.findUnique({where:{email}});

        return user;
    }

    async findByCpf(cpf: string) {
        const user = await this.ctx.findUnique({where:{cpf}});

        return user;
    }
}