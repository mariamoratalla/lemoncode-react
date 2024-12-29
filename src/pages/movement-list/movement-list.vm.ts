export interface MovementListVm {
  id: string;
  transaction: Date;
  realTransaction: Date;
  description: string;
  amount: number;
  balance: number;
  accountId: string;
}
