import { months, rusMonths } from "../constants";

export const translateDate = (date: string, y: boolean) => {
  return (
    rusMonths[months.findIndex((m) => date.includes(m))] +
    " " +
    (y ? date.slice(-4) : date.slice(-2))
  );
};
