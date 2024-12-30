import React from "react";
import { AccountInfo } from "../account-info.vm";
import classes from "./account-info.component.module.css"

interface Props {
  accountInfo: AccountInfo;
}

export const AccountInfoComponent: React.FC<Props> = (props) => {
  const { accountInfo } = props;

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>Saldos y Últimos movimientos</h1>
        <div className={classes.saldoContainer}>
          <p className={classes.titulo}>SALDO DISPONIBLE</p>
          <p className={classes.saldo}>{accountInfo?.balance}€</p>
        </div>
      </div>
      <div className={classes.cuentaContainer}>
        <p>Alias: {accountInfo?.name}</p>
        <p>IBAN: {accountInfo?.iban}</p>
      </div>
    </>
  );
};
