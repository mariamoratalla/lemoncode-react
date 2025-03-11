export interface NewAccountVm {
  type: string;
  alias: string;
}

export const createNewEmptyAccount = (): NewAccountVm => ({
  type: "",
  alias: "",
});

export interface NewAccountError {
  type: string;
  alias: string;
}

export const createNewEmptyAccountError = (): NewAccountError => ({
  type: "",
  alias: "",
});
