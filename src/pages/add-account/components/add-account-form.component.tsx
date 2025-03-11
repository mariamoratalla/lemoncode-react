import React from "react";
import {
  createNewEmptyAccount,
  createNewEmptyAccountError,
  NewAccountVm,
} from "../add-account.vm";
import classes from "./add-account-form.component.module.css";
import { validateForm } from "../validations";

interface Props {
  onAddAccount: (account: NewAccountVm) => void;
}

export const AddAccountForm: React.FC<Props> = (props) => {
  const { onAddAccount } = props;
  const [account, setAccount] = React.useState(createNewEmptyAccount());
  const [errors, setErrors] = React.useState(createNewEmptyAccountError());

  React.useEffect(() => {
    setAccount({ ...account });
  }, []);

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateForm(account);
    setErrors(validation.errors);

    if (validation.succeded) {
      onAddAccount(account);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.formContainer}>
        <div>
          <label>Tipo de cuenta:</label>
          <select
            name="type"
            className={classes.input}
            onChange={handleFieldChange}
          >
            <option value="">Seleccionar</option>
            <option value="1">Cuenta Corriente</option>
            <option value="2">Cuenta de Ahorro</option>
            <option value="3">Cuenta de Nómina</option>
          </select>
          <p className={classes.error}>{errors.type}</p>
        </div>
        <div>
          <label>Alias:</label>
          <input
            type="text"
            name="alias"
            className={classes.input}
            onChange={handleFieldChange}
          />
          <p className={classes.error}>{errors.alias}</p>
        </div>
      </div>
      <button type="submit" className={classes.button}>
        GUARDAR
      </button>
    </form>
  );
};
