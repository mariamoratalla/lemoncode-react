import React from "react";
import logoBlanco from "/assets/logo_header_white.svg";
import classes from "./header.component.module.css";
import { useProfileContext } from "@/core/profile";

export const HeaderComponent: React.FC = () => {
  const { username } = useProfileContext();

  return (
    <header className={classes.header}>
      <div>
        <img className={classes.headerLogo} src={logoBlanco} alt="logo" />
        <div className={classes.usuario}>
          <p>{username}</p>
        </div>
      </div>
    </header>
  );
};
