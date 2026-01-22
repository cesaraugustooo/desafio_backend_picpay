export interface TransactionAuthorizeGateway {
    authorize(): Promise<boolean>
}