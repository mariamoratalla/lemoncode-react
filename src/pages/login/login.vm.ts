export interface Credentials {
  user: string;
  password: string;
}

export const createEmptyCredentials = (): Credentials => ({
  user: "",
  password: "",
});

export interface CredentialsErrorMessage {
  user: string;
  password: string;
}

export const createEmptyCredentialsErrorMessage = (): CredentialsErrorMessage => ({
  user: "",
  password: "",
});
