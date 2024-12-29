import { AppLayout } from "@/layouts";
import React from "react";
import { MovementListVm } from "./movement-list.vm";
import { useParams } from "react-router-dom";
import { getMovementList } from "./api/movement-list.api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import classes from "./movement-list.page.module.css";
import { AccountInfo } from "./account-info.vm";
import { getAccountInfo } from "./api";
import { mapAccountInfoFromApiToVm } from "./account-info.mapper";

export const MovementList: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementListVm[]>([]);
  const [accountInfo, setAccountInfo] = React.useState<AccountInfo>();
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      getAccountInfo(id).then((result) => {
        setAccountInfo(mapAccountInfoFromApiToVm(result));
      });

      getMovementList(id).then((result) => {
        setMovementList(mapMovementListFromApiToVm(result));
      });
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
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
      </div>
      {movementList.map((movimiento) => {
        return (
          <div key={movimiento.id}>
            <span>{movimiento.transaction.toLocaleDateString()}</span>
            <span>{movimiento.realTransaction.toLocaleDateString()}</span>
            <span>{movimiento.description}</span>
            <span>{movimiento.amount}</span>
            <span>{movimiento.balance}</span>
          </div>
        );
      })}
    </AppLayout>
  );
};
