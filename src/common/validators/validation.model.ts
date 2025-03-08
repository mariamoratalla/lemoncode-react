export interface FieldValidationResult {
  succeeded: boolean;
  errorMessage?: string;
}

export interface FormValidationResult<T> {
  succeded: boolean;
  errors: T;
}
