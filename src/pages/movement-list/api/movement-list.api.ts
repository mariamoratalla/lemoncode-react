import axios from "axios";
import { MovementListApi } from "./movement-list.api.model";

const url = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovementList = async (
  accountId: string
): Promise<MovementListApi[]> => {
  return axios
    .get<MovementListApi[]>(url, {
      params: { accountId },
    })
    .then((response) => response.data);
};
