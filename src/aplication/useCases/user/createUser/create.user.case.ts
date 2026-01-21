import { hash } from "@domain/utils/bcript.js";
import type { Irepository } from "../../../ports/repositorys/user.repository.interface.js";
import { User, type CreateIUser, type ResponseUser } from "@domain/entitys/User.js";
import { DomainError } from "@domain/errorHandler.js";

export class CreateUserCase {
    constructor(
        private readonly repository: Irepository
    ) { }


    async register(data: CreateIUser): Promise<User> {
        const verifyEmail = await this.repository.findByEmail(data.email);
        const verifyCpf = await this.repository.findByCpf(data.cpf);

        if (verifyEmail) {
            throw new DomainError("email ja cadastrado.", 409);
        }

        if (verifyCpf) {
            throw new DomainError("cpf ja cadastrado.", 409);
        }

        const user = new User(
            data.name, 
            data.email, 
            data.cpf,
            data.tipo,
            await hash(data.password)
        );

        const createUser = await this.repository.create(user);

        return user;
    }
}
