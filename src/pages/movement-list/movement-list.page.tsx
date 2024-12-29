import { AppLayout } from "@/layouts";
import React from "react";
import { MovementListVm } from "./movement-list.vm";
import { useParams } from "react-router-dom";

export const MovementList: React.FC = () => {
  const movimientos: MovementListVm[] = [
    {
      id: "1",
      transaction: new Date(2019, 11, 9),
      realTransaction: new Date(2019, 11, 9),
      description: "Nómina noviembre",
      amount: 900,
      balance: 1000,
      accountId: "1",
    },
    {
      id: "2",
      transaction: new Date(2019, 11, 7),
      realTransaction: new Date(2019, 11, 3),
      description: "Alquiler noviembre",
      amount: -400,
      balance: 500,
      accountId: "1",
    },
    {
      id: "3",
      transaction: new Date(2019, 11, 6),
      realTransaction: new Date(2019, 11, 9),
      description: "Mercadona",
      amount: -100,
      balance: 400,
      accountId: "1",
    },
    {
      id: "4",
      transaction: new Date(2019, 11, 23),
      realTransaction: new Date(2019, 11, 9),
      description: "Extra diciembre",
      amount: 900,
      balance: 1300,
      accountId: "1",
    },
    {
      id: "5",
      transaction: new Date(2019, 11, 23),
      realTransaction: new Date(2019, 11, 9),
      description: "Extra junio",
      amount: 900,
      balance: 1300,
      accountId: "2",
    },
  ];

  const { id } = useParams();

  return (
    <AppLayout>
      <div>Movement list</div>
      {movimientos
        .filter((movimiento) => movimiento.accountId === id)
        .map((movimiento) => {
          return (
            <div key={movimiento.id}>
              <span>{movimiento.transaction.toLocaleDateString()}</span>
              <span>{movimiento.realTransaction.toLocaleDateString()}</span>
              <span>{movimiento.description}</span>
              <span>{movimiento.amount}</span>
              <span>{movimiento.balance}</span>
            </div>
          );
        })}
    </AppLayout>
  );
};
