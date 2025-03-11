import * as apiModel from "./api";
import * as viewModel from "./add-account.vm";

export const mapAccountFromVmToApi = (
  account: viewModel.NewAccountVm
): apiModel.NewAccountApi => ({
  type: account.type,
  name: account.alias,
});
