import type { ITokenAuthenticate } from "@aplication/interfaces/auth/token.autenticate.interface.js";
import type { UserByToken } from "@aplication/interfaces/user.by.token.js";
import type { AuthenticateUserCase } from "../AuthenticateUserCase/authenticate.user.case.js";
import type { Irepository } from "@aplication/interfaces/repositorys/user.repository.interface.js";
import { DomainError } from "@domain/errorHandler.js";
import { compare, hash } from "@domain/utils/bcript.js";

interface UserLogin {
    email: string,
    password: string
}

export class LoginUseCase {
    constructor (
        private readonly tokenService: AuthenticateUserCase,
        private readonly userRepository: Irepository
    ) {}

    async login(data: UserLogin) {
        const user = await this.userRepository.findByEmail(data.email);

        if(!user) {
            throw new DomainError("email nao cadastrado",401);
        }

        const senhaParse = await compare(data.password, user.password);

        console.log(await hash(data.password),user.password);

        if(!senhaParse){
            throw new DomainError("credenciais invalidas",401);
        }
        
        return this.tokenService.createToken(user);
    }
}