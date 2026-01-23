interface Chains<T> {
    payload: T
}

export interface ITokenAuthenticate<T> {
    createToken(chains: Chains<T>): Promise<string>
}