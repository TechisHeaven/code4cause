import { createContext, useContext } from "react";

export const initialUserState = {
  user: null,
  loading: true,
  error: null,
};

//Define the user reducer function
export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "LOGIN_RESET":
      return {
        ...state,
        loading: false,
        user: null,
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...initialUserState,
        loading: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
}

// Combine the reducers into a single reducer function
export function rootReducer(state, action) {
  return {
    user: userReducer(state.user, action),
  };
}

// Create context objects for the state and dispatch function
export const StateContext = createContext();
export const DispatchContext = createContext();

// Define custom hooks to access the state and dispatch function from context
export function useStateContext() {
  return useContext(StateContext);
}

export function useDispatchContext() {
  return useContext(DispatchContext);
}
