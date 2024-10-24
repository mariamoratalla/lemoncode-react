import React from "react";
import logoBlanco from "/assets/logo_header_white.svg";
import classes from "./footer.component.module.css";

export const FooterComponent: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <img className={classes.footerLogo} src={logoBlanco} alt="logo" />
    </footer>
  );
};
