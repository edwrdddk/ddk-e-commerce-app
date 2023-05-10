import { AnyAction } from "redux";

type Human = {
  name: string;
}

type Alien = {
  fly: () => void;
}

type Hybrid = Human & Alien;

const Finn: Hybrid = {
  name: 'Finn',
  fly: () => {}
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

//Function Overloading
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

// JS

//export const createAction = (type, payload) => ({ type, payload});
