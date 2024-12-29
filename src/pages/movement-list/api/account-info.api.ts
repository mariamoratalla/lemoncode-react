import axios from "axios";
import { AccountInfoApi } from "./account-info.api.model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountInfo = async (id: string): Promise<AccountInfoApi> =>
  axios.get<AccountInfoApi>(`${url}/${id}`).then((response) => response.data);
