import React from "react";
import {
  createEmptyCredentials,
  createEmptyCredentialsErrorMessage,
  Credentials,
  CredentialsErrorMessage,
} from "../login.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );
  const [errors, setErrors] = React.useState<CredentialsErrorMessage>(
    createEmptyCredentialsErrorMessage()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateFields = validateForm(credentials);
    setErrors(validateFields.errors);

    if (validateFields.succeeded) {
      onLogin(credentials);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="username"
          name="user"
          onChange={handleFieldChange}
          placeholder="Usuario"
          className={errors.user ? classes.inputError : ""}
        />
        {errors.user && <p className={classes.error}>{errors.user}</p>}
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleFieldChange}
          placeholder="Clave"
          className={errors.password ? classes.inputError : ""}
        />
        {errors.password && <p className={classes.error}>{errors.password}</p>}
      </div>
      <button className={classes.btnEnviar} type="submit">
        Acceder
      </button>
    </form>
  );
};
