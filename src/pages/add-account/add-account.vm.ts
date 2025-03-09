export interface NewAccountVm {
  type: string;
  alias: string;
}

export const createNewEmptyAccount = (): NewAccountVm => ({
  type: "",
  alias: "",
});
