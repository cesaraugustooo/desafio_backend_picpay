import type { IHtppContext } from "../../interfaces/controllers/controller.interface.js";
import type { CreateUserCase } from "@useCases/user/createUser/create.user.case.js";
import { ResponseCreateUserDTO } from "./create.user.dto.js";

export class UserController {
    constructor (
        private readonly service: CreateUserCase
    ) {}

    async register(ctx: IHtppContext) {
        try {
            const body = ctx.getRquest().body

            const user = await this.service.register(body);
            
            ctx.send(200,{message:"registro efetuado com sucesso.",user: ResponseCreateUserDTO(user)});
        } catch (error) {
            ctx.next(error);
        }
    }
}