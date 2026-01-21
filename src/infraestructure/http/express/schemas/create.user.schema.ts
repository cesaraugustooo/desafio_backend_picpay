import z, { email, string } from "zod";
import type { CraeteUserDTO } from "../../../../aplication/useCases/controllers/user/create.user.dto.js";

export const CreateUserSchema: z.ZodType<CraeteUserDTO> = z.object({
    name: string().max(191),
    email: email().max(191),
    password: string().min(8).max(10),
    cpf: string().length(11),
    tipo: z.enum(["comum","lojista"])
}).strict();
