import z, { email, string } from "zod";

export interface CraeteUserDTO {
    name: string,
    email: string,
    password: string,
    cpf: string
}

export interface IResponseCreateUserDTO {
    id: string,
    name: string,
    email: string,
    cpf: string,
}

export function ResponseCreateUserDTO(data: IResponseCreateUserDTO): IResponseCreateUserDTO{
    return {
        id: data.id,
        name: data.name,
        email: data.email,
        cpf: data.cpf
    }
}