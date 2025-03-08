import { FormValidationResult } from "@/common/validators/validation.model";
import { TransferError, TransferVm } from "../transfer.vm";
import {
  validateAccountIdField,
  validateAmountField,
  validateConceptField,
  validateEmailField,
  validateIbanField,
  validateNameField,
  validateNotesField,
  validateRealDateTransferField,
} from "./transfer-fields.validation";

export const validateForm = (
  transfer: TransferVm
): FormValidationResult<TransferError> => {
  const fieldValidationResults = [
    validateAccountIdField(transfer.accountId),
    validateIbanField(transfer.iban),
    validateAmountField(transfer.amount),
    validateNameField(transfer.name),
    validateConceptField(transfer.concept),
    validateNotesField(transfer.notes),
    validateRealDateTransferField(transfer.realDateTransfer),
    validateEmailField(transfer.email),
  ];

  return {
    succeded: fieldValidationResults.every((field) => field.succeeded),
    errors: {
      accountId: fieldValidationResults[0].errorMessage ?? "",
      iban: fieldValidationResults[1].errorMessage ?? "",
      amount: fieldValidationResults[2].errorMessage ?? "",
      name: fieldValidationResults[3].errorMessage ?? "",
      concept: fieldValidationResults[4].errorMessage ?? "",
      notes: fieldValidationResults[5].errorMessage ?? "",
      realDateTransfer: fieldValidationResults[6].errorMessage ?? "",
      email: fieldValidationResults[7].errorMessage ?? "",
      dateTransfer: "",
    },
  };
};
