import React from "react";
import { MovementListVm } from "../movement-list.vm";
import classes from "./movement-list-item.module.css";

interface Props {
  movement: MovementListVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movement } = props;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>
        {movement.transaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>
        {movement.realTransaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>{movement.description}</span>
      <span
        className={
          movement.amount > 0
            ? `${classes.dataCell} ${classes.alignRight}`
            : `${classes.dataCell} ${classes.alignRight} ${classes.negativeAmount}`
        }
      >
        {movement.amount} €
      </span>
      <span
        className={
          movement.balance > 0
            ? `${classes.dataCell} ${classes.alignRight}`
            : `${classes.dataCell} ${classes.alignRight} ${classes.negativeAmount}`
        }
      >
        {movement.balance} €
      </span>
    </div>
  );
};
