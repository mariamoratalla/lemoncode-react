import React from "react";
import { AppLayout } from "@/layouts";
import classes from "./add-account.page.module.css";
import { AddAccountForm } from "./components";
import { NewAccountVm } from "./add-account.vm";
import { mapAccountFromVmToApi } from "./add-account.mapper";
import { saveAccount } from "./api/add-account.api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AddAccount: React.FC = () => {
  const navigate = useNavigate();

  const handleAddAccount = (accountInfo: NewAccountVm) => {
    const newAccount = mapAccountFromVmToApi(accountInfo);
    saveAccount(newAccount).then((result) => {
      if (result) {
        alert("La cuenta se ha creado con éxito");
        navigate(appRoutes.accountList);
      } else {
        alert("Error al crear la cuenta");
      }
    });
  };

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
