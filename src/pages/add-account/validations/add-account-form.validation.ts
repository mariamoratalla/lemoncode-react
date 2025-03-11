import { FormValidationResult } from "@/common/validators/validation.model";
import { NewAccountError, NewAccountVm } from "../add-account.vm";
import {
  validateAliasField,
  validateTypeField,
} from "./add-account-fields.validation";

export const validateForm = (
  form: NewAccountVm
): FormValidationResult<NewAccountError> => {
  const fieldValidationResults = [
    validateTypeField(form.type),
    validateAliasField(form.alias),
  ];

  return {
    succeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      alias: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
