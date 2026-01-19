import z, { email, string } from "zod";

export interface CraeteUserDTO {
    name: string,
    email: string,
    password: string,
    cpf: string
}