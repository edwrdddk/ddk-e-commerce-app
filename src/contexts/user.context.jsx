import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  console.log('dispatched');
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
}

const INTIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INTIAL_STATE);
  console.log(currentUser);
  // const { currentUser } = state
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
  }
  const value = { currentUser, setCurrentUser };

  // signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

/*
const userReducer = (state, action) => {
  return {
    currentUser: 
  }
}
*/