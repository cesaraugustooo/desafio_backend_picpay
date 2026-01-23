export interface CraeteUserDTO {
    name: string,
    email: string,
    tipo :"comum" | "lojista",
    password: string,
    cpf: string
}

export interface IResponseCreateUserDTO {
    id: string,
    name: string,
    email: string,
    tipo :"comum" | "lojista",
    cpf: string,
}

export function ResponseCreateUserDTO(data: IResponseCreateUserDTO): IResponseCreateUserDTO{
    return {
        id: data.id,
        name: data.name,
        email: data.email,
        tipo: data.tipo,
        cpf: data.cpf
    }
}