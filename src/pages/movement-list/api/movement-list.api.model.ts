export interface MovementListApi {
    id: string;
    description: string;
    amount: number;
    balance: number;
    transaction: Date;
    realTransaction: Date;
    accountId: string;
}