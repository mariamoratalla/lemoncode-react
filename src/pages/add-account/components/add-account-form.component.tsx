import React from "react";
import { NewAccountVm } from "../add-account.vm";

interface Props {
  account: NewAccountVm;
  onSubmit: () => {};
}

export const AddAccountForm: React.FC = (props) => {
  const { account, onSubmit } = props;
  return <></>;
};
