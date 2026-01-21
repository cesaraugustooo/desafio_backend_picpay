import bcrypt from "bcrypt";

const salts = 10

export async function hash(data: string): Promise<string> {
    const hash = await bcrypt.hash(data, salts);
    return hash
}