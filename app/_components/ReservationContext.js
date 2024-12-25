"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext({
  range: {
    from: undefined,
    to: undefined,
  },
  setRange: () => {},
  resetRange: () => {},
});

const initialState = { from: null, to: null };

function ReservationContextProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);

  if (!context)
    throw new Error(
      "ReservationContext was used outside of ReservationContextProvider"
    );

  const { range, setRange, resetRange } = context;

  return { range, setRange, resetRange };
}

export default ReservationContextProvider;
