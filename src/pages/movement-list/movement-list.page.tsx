import { AppLayout } from "@/layouts";
import React from "react";
import { MovementListVm } from "./movement-list.vm";
import { useParams } from "react-router-dom";
import { getMovementList } from "./api/movement-list.api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

export const MovementList: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementListVm[]>([]);
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      getMovementList(id).then((result) => {
        setMovementList(mapMovementListFromApiToVm(result));
      });
    }
  }, []);

  return (
    <AppLayout>
      <div>Movement list</div>
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
