import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
  isStringValueInformed,
} from "@/common/validators";
import { FieldValidationResult } from "@/common/validators/validation.model";

export const validateTypeField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};

export const validateAliasField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};
