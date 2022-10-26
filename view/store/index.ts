import { createStore } from "redux";

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

const store = createStore(reducer);
export default store;
