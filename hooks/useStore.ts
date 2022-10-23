import { createStore } from "redux";

export interface StoreDispatch {
  type: s;
  payload: a;
}

export interface StoreState {
  number: n;
  name: s;
}

const currentState: StoreState = {
  number: 1,
  name: "전상욱",
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
