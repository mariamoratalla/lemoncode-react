import { AppLayout } from "@/layouts";
import React from "react";
import { MovementListVm } from "./movement-list.vm";

export const MovementList: React.FC = () => {
  const movimientos: MovementListVm[] = [
    {
      id: 1,
      fecha: new Date(2019, 12, 9),
      fechaValor: new Date(2019, 12, 9),
      descripcion: "Nómina noviembre",
      importe: 900,
      saldoDisponible: 1000,
    },
    {
      id: 2,
      fecha: new Date(2019, 12, 7),
      fechaValor: new Date(2019, 12, 3),
      descripcion: "Alquiler noviembre",
      importe: -400,
      saldoDisponible: 500,
    },
    {
      id: 3,
      fecha: new Date(2019, 12, 6),
      fechaValor: new Date(2019, 12, 9),
      descripcion: "Mercadona",
      importe: -100,
      saldoDisponible: 400,
    },
    {
      id: 5,
      fecha: new Date(2019, 12, 23),
      fechaValor: new Date(2019, 12, 9),
      descripcion: "Extra diciembre",
      importe: 900,
      saldoDisponible: 1300,
    },
  ];

  return (
    <AppLayout>
      <div>Movement list</div>
      {movimientos.map((movimiento) => {
        return (
          <div>
            <span key={movimiento.id}>{movimiento.fecha.toString()}</span>
            <span key={movimiento.id}>{movimiento.fechaValor.toString()}</span>
            <span key={movimiento.id}>{movimiento.descripcion}</span>
            <span key={movimiento.id}>{movimiento.importe}</span>
            <span key={movimiento.id}>{movimiento.saldoDisponible}</span>
          </div>
        );
      })}
    </AppLayout>
  );
};
