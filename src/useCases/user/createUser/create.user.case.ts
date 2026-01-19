import { AppError } from "../../../errorHandler.js";
import { hash } from "@utils/bcript.js";
import type { Irepository } from "@domain/repositorys/user.repository.interface.js";
import { User, type CreateIUser, type ResponseUser } from "@domain/entitys/User.js";

export class CreateUserCase {
    constructor(
        private readonly repository: Irepository
    ) { }


    async register(data: CreateIUser): Promise<User> {
        const verifyEmail = await this.repository.findByEmail(data.email);
        const verifyCpf = await this.repository.findByCpf(data.cpf);

        if (verifyEmail) {
            throw new AppError("email ja cadastrado.", 409);
        }

        if (verifyCpf) {
            throw new AppError("cpf ja cadastrado.", 409);
        }

        const user = new User(
            data.name, 
            data.email, 
            data.cpf, 
            await hash(data.password)
        );

        const createUser = await this.repository.create(user);

        return user;
    }
}
