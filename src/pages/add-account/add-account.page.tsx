import React from "react";
import { AppLayout } from "@/layouts";
import classes from "./add-account.page.module.css";
import { AddAccountForm } from "./components";
import { NewAccountVm } from "./add-account.vm";

export const AddAccount: React.FC = () => {
  const handleAddAccount = (accountInfo: NewAccountVm) =>
    console.log(accountInfo);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta bancaria</h1>
        </div>
        <AddAccountForm onAddAccount={handleAddAccount} />
      </div>
    </AppLayout>
  );
};
