import z, { email, string } from "zod";
import type { CraeteUserDTO } from "../../../../useCases/user/createUser/create.user.dto.js";

export const CreateUserSchema: z.ZodType<CraeteUserDTO> = z.object({
    name: string().max(191),
    email: email().max(191),
    password: string().min(8).max(10),
    cpf: string().min(11).max(11),
}).strict();
