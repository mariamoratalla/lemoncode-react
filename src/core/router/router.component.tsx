import {
  Account,
  AccountList,
  LoginPage,
  MovementList,
  Transfer,
} from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />}></Route>
        <Route path={appRoutes.accountList} element={<AccountList />}></Route>
        <Route path={appRoutes.editAccount} element={<Account />}></Route>
        <Route path={appRoutes.movements} element={<MovementList />}></Route>
        <Route path={appRoutes.transfer} element={<Transfer />}></Route>
        <Route
          path={appRoutes.transferFromAccount}
          element={<Transfer />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
