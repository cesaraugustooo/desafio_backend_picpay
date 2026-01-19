import { AppError } from "../../../errorHandler.js";
import { hash } from "../../../utils/bcript.js";
import type { Irepository } from "../../../domain/repositorys/repository.interface.js";
import type { CreateIUser, User } from "../../../domain/entitys/User.js";

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

        const user = await this.repository.create({ ...data, password: await hash(data.password) });

        return user;
    }
}
