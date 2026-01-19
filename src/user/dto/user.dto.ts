import { email, string, z, ZodObject } from "zod";
import type { CreateIUser, IUser } from "../entity/interfaces/user.interface.js";

export const CreateDTO = z.object({
    name: string().max(191),
    email: email().max(191),
    cpf: string().max(11).min(11),
    password: string().min(8).max(12),
});

export const UserResource = (user: IUser) => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf
    }
    
}

export type CreateDTO = z.infer<typeof CreateDTO>

