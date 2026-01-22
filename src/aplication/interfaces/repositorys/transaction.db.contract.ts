
interface ITransactionAtribute { 
    transactionAtribute: any 
}

export interface DBTransactionManagerContract {
    execute<T>(callback: T): void
}