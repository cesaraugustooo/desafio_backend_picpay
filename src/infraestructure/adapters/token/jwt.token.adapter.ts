import type { Chains, ITokenAuthenticate } from "@aplication/interfaces/auth/token.autenticate.interface.js";
import type { UserByToken } from "@aplication/interfaces/user.by.token.js";
import jwt from "jsonwebtoken";

export class JwtToken implements ITokenAuthenticate<UserByToken> {
    async createToken(chains: Chains<UserByToken>): Promise<string> {
        if(!process.env.JWT_KEY){
            throw new Error("chave secreta inexistente");
        }

        return await jwt.sign(chains,process.env.JWT_KEY,{
            expiresIn: 1
        });
    }
}