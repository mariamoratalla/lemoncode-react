import * as apiModel from "./api/account-info.api.model";
import * as viewModel from "./account-info.vm";

export const mapAccountInfoFromApiToVm = (
  account: apiModel.AccountInfoApi
): viewModel.AccountInfo => ({
  id: Number(account.id),
  iban: account.iban,
  name: account.name,
  balance: account.balance,
});
