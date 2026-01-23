import type { IHtppContext } from "../../interfaces/controllers/controller.interface.js";
import type { CreateUserCase } from "@useCases/user/createUser/create.user.case.js";
import { ResponseCreateUserDTO } from "./dtos/create.user.dto.js";
import type { GetCarteiraUseCase } from "@useCases/user/getCarteira/get.carteira.case.js";

export class UserController {
    constructor (
        private readonly createUserCase: CreateUserCase,
        private readonly getCarteiraCase: GetCarteiraUseCase
    ) {}

    async register(ctx: IHtppContext) {
        try {
            const body = ctx.getRquest().body

            const user = await this.createUserCase.register(body);
            
            ctx.send(200,{message:"registro efetuado com sucesso.",user: ResponseCreateUserDTO(user)});
        } catch (error) {
            ctx.next(error);
        }
    }

    async getCarteira(ctx: IHtppContext) {
        try {
            const user = ctx.getRquest().user; 

            const carteira = this.getCarteiraCase.getCarteira(user);

            return ctx.send(200,carteira);

        } catch (error) {
            ctx.next(error)
        }
    }
}