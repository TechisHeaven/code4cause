import { useReducer } from "react";
import {
  DispatchContext,
  StateContext,
  initialUserState,
  rootReducer,
} from "./store";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {
    user: initialUserState,
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default AppProvider;
