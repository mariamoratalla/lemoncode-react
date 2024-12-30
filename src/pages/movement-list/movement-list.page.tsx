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
import { AccountInfoComponent, MovementListTableComponent } from "./components";

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
        <AccountInfoComponent accountInfo={accountInfo!} />
        <MovementListTableComponent movements={movementList} />
      </div>
    </AppLayout>
  );
};
