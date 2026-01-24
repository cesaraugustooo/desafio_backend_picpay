import type { IHtppContext } from "@aplication/interfaces/controllers/controller.interface.js";
import type { LoginUseCase } from "@useCases/auth/LoginUserCase/login.use.case.js";

export class AuthController {
    constructor (
        private readonly loginCase: LoginUseCase,
    ) {}

    async login(ctx: IHtppContext) {
        try {
            const user = ctx.getRquest().body;
            
            const token: string = await this.loginCase.login(user);

            return ctx.send(200,{token: token});
        } catch (error) {
            ctx.next(error);
        }
    }
}