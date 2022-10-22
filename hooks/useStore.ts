import { createStore } from "redux";
import { Path } from "../types";

export interface StoreDispatch {
  type: string;
  payload: any;
}

export interface StoreState {
  path: Path[];
  clickIconList: number[];
}

const currentState: StoreState = {
  path: [{ id: 0, name: "홈" }],
  clickIconList: [],
};

const reducer = (
  state: StoreState = currentState,
  action: StoreDispatch
): StoreState => {
  return {
    ...state,
    [action?.type]: action?.payload,
  };
};

const useStore = createStore(reducer);
export default useStore;
