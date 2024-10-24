import {
  createEmptyCredentialsErrorMessage,
  Credentials,
  CredentialsErrorMessage,
} from "./login.vm";

interface ValidationResult {
  succeeded: boolean;
  errors: CredentialsErrorMessage;
}

export const validateForm = (credentials: Credentials): ValidationResult => {
  let validationResult: ValidationResult = {
    succeeded: true,
    errors: createEmptyCredentialsErrorMessage(),
  };

  if (!credentials.user.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      user: "Debe informar el campo usuario",
    };

    validationResult.succeeded = false;
  }

  if (!credentials.password.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      password: "Debe informar el campo password",
    };

    validationResult.succeeded = false;
  }

  return validationResult;
};
