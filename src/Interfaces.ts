import { Operator } from "./Types";

export interface Term {
  id: number,
  operator: Operator,
  number: number,
  disabled: boolean,
}