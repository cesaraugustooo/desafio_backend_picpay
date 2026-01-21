
export interface TransactionDBInterface {
    transactionManager<T>( callback: (tx: any) => Promise<T>): Promise<T>
}