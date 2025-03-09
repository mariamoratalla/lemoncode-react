import React from "react";
import { createNewEmptyAccount, NewAccountVm } from "../add-account.vm";
import classes from "./add-account-form.component.module.css";

interface Props {
  onAddAccount: (account: NewAccountVm) => void;
}

export const AddAccountForm: React.FC<Props> = (props) => {
  const { onAddAccount } = props;
  const [account, setAccount] = React.useState(createNewEmptyAccount());

  React.useEffect(() => {
    setAccount({ ...account });
  }, []);

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    onAddAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddAccount(account);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.formContainer}>
        <div>
          <label>Tipo de cuenta:</label>
          <select
            name="tipo"
            className={classes.input}
            onChange={handleFieldChange}
          >
            <option value="">Seleccionar</option>
            <option value="1">Cuenta Corriente</option>
            <option value="2">Cuenta de Ahorro</option>
            <option value="3">Cuenta de Nómina</option>
          </select>
        </div>
        <div>
          <label>Alias:</label>
          <input
            type="text"
            name="alias"
            className={classes.input}
            onChange={handleFieldChange}
          />
        </div>
      </div>
      <button type="submit" className={classes.button}>
        GUARDAR
      </button>
    </form>
  );
};
