import React from "react";
import { MovementListVm } from "../movement-list.vm";
import classes from "./movement-list-table.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";

interface Props {
  movements: MovementListVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movements } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>FECHA</span>
            <span className={classes.headerCell}>FECHA VALOR</span>
            <span className={classes.headerCell}>DESCRIPCIÓN</span>
            <span className={classes.headerCell}>IMPORTE</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          </div>
          {movements.map((movement) => {
            return (
              <MovementListItemComponent
                key={movement.id}
                movement={movement}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
