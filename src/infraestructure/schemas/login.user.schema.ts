import type { LoginUserDTO } from "@controllers/auth/DTO/auth.controller.dto.js";
import z, { email, string } from "zod";

export const LoginUserSchema: z.ZodType<LoginUserDTO> = z.object({
    email: email().max(191),
    password: string().min(8).max(10)
}).strict();