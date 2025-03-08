import React from "react";
import {
  AccountVm,
  createEmptyTransferError,
  createEmptyTransferVm,
  TransferError,
  TransferVm,
} from "../transfer.vm";
import { validateForm } from "../validations";
import classes from "./transfer-form.component.module.css";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId?: string;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer, defaultAccountId } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm()
  );
  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  React.useEffect(() => {
    setTransfer({
      ...transfer,
      accountId: defaultAccountId ?? "",
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateForm(transfer);
    setErrors(validation.errors);

    if (validation.succeded) {
      onTransfer(transfer);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label htmlFor="accountId">Seleccione una cuenta origen:</label>
            <select
              className={classes.large}
              id="accountId"
              name="accountId"
              onChange={handleFieldChange}
            >
              <option value="">Seleccione una opción</option>
              {accountList.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>
          <div>
            <label htmlFor="iban">Ingrese el IBAN de destino:</label>
            <input
              className={classes.large}
              type="text"
              id="iban"
              name="iban"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.iban}</p>
          </div>
          <div>
            <label htmlFor="amount">
              Importe <span>(EUR)</span>:
            </label>
            <input
              className={classes.small}
              type="number"
              id="amount"
              name="amount"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.amount}</p>
          </div>
          <div>
            <label htmlFor="name">Beneficiario:</label>
            <input
              className={classes.large}
              type="text"
              id="name"
              name="name"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
          <div>
            <label htmlFor="concept">Concepto:</label>
            <input
              className={classes.large}
              type="text"
              id="concept"
              name="concept"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.concept}</p>
          </div>
          <div>
            <label htmlFor="notes">Observaciones:</label>
            <input
              className={classes.large}
              type="text"
              id="notes"
              name="notes"
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>
              Para que la transferencia se realice en otra fecha diferente a la
              de hoy, por favor, indíquenos la fecha de ejecución:
            </p>
          </div>
          <div>
            <label htmlFor="realDateTransfer">Fecha de ejecución</label>
            <input
              className={classes.large}
              type="date"
              id="realDateTransfer"
              name="realDateTransfer"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.realDateTransfer}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.email}</p>
          </div>
        </div>
        <button type="submit" className={classes.button}>
          REALIZAR LA TRANSFERENCIA
        </button>
      </form>
    </div>
  );
};
