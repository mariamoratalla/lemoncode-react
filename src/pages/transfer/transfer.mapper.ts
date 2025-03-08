import * as viewModel from "./transfer.vm";
import * as apiModel from "./api";

export const mapAccountFromApiToVm = (
  account: apiModel.Account
): viewModel.AccountVm => ({
  id: account.id,
  alias: account.name,
  iban: account.iban,
});

export const mapTransferFromVmToApi = (
  transfer: viewModel.TransferVm
): apiModel.Transfer => ({
  accountId: transfer.accountId,
  amount: transfer.amount,
  concept: transfer.concept,
  iban: transfer.iban,
  name: transfer.name,
  notes: transfer.notes,
  transferDate: transfer.dateTransfer?.toString() ?? "",
  realTransferDate: transfer.realDateTransfer?.toString() ?? "",
});
