import type { ITokenAuthenticate } from "@aplication/interfaces/auth/token.autenticate.interface.js";
import type { UserByToken } from "@aplication/interfaces/user.by.token.js";

export class AuthenticateUserCase {
    constructor (
        private readonly authenticateToken: ITokenAuthenticate<UserByToken> 
    ) {}

    async createToken(chains: UserByToken): Promise<string> {
        return this.authenticateToken.createToken({payload: chains});
    }
}