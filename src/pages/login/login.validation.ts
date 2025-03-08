import { FormValidationResult } from "@/common/validators/validation.model";
import { Credentials, CredentialsErrorMessage } from "./login.vm";
import {
  validatePasswordField,
  validateUserField,
} from "./login-field-validation";

export const validateForm = (
  credentials: Credentials
): FormValidationResult<CredentialsErrorMessage> => {
  const fieldValidationResults = [
    validateUserField(credentials.user),
    validatePasswordField(credentials.password),
  ];

  return {
    succeded: fieldValidationResults.every((field) => field.succeeded),
    errors: {
      user: fieldValidationResults[0].errorMessage ?? "",
      password: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
