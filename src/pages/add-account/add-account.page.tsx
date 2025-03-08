import React from "react";
import { AppLayout } from "@/layouts";
import classes from "./add-account.page.module.css";

export const AddAccount: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta bancaria</h1>
        </div>
      </div>
    </AppLayout>
  );
};
