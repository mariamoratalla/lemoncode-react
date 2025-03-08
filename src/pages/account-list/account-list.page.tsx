import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTable } from "./components";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountList: React.FC = () => {
  const navigate = useNavigate();
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  const handleClick = () => {
    navigate(appRoutes.addAccount);
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis cuentas</h1>
          <button onClick={handleClick}>AGREGAR NUEVA CUENTA</button>
        </div>
        <AccountListTable accountList={accountList} />
      </div>
    </AppLayout>
  );
};
