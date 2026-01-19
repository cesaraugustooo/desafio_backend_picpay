import { AppError } from "../../errorHandler.js";
import { hash } from "../../utils/bcript.js";
import type { CreateIUser, IUser } from "../entity/interfaces/user.interface.js";
import type { UserRepository } from "../reposytory/user.repository.js";

export class UserService {
    constructor (
        private readonly repository: UserRepository
    ) {}

    async register(data: CreateIUser): Promise<IUser>{
        const verifyEmail = await this.repository.findByEmail(data.email);
        const verifyCpf = await this.repository.findByCpf(data.cpf);
    
        if(verifyEmail){
            throw new AppError("email ja cadastrado.",409);
        }

        if(verifyCpf){
            throw new AppError("cpf ja cadastrado.",409);
        }

        const user = await this.repository.create({...data, password: await hash(data.password)});

        return user;
    }

}