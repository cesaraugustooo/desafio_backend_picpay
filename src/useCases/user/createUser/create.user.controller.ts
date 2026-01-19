import type { IHtppContext } from "@interfaces/controller.interface.js";
import type { CreateUserCase } from "./create.user.case.js";
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