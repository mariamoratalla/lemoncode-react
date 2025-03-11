import axios from "axios";
import { NewAccountApi } from "./add-account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: NewAccountApi): Promise<NewAccountApi> =>
  axios.post<NewAccountApi>(url, account).then((response) => response.data);
