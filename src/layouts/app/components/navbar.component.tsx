import { appRoutes, routesPerfixes } from "@/core/router";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavbarComponent: React.FC = () => {
  const {pathname} = useLocation()
  
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li className={pathname.startsWith(routesPerfixes.accountList) ? classes.selected : ""}>
          <Link to={appRoutes.accountList}>Mis cuentas</Link>
        </li>
        <li className={pathname.startsWith(routesPerfixes.transfer) ? classes.selected : ""}>
          <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
      </ul>
    </nav>
  );
};
