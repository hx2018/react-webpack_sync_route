import { counter } from "./action-type";

// action constructor
export const increment = (payload) => ({ type: counter.INCREMENT, payload });
export const decrement = (payload) => ({ type: counter.DECREMENT, payload });
