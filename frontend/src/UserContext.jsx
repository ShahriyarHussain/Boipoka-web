import { createContext, useContext } from "react";

export const UserContext = createContext({
  loggedIn: localStorage.getItem("token") ? true : false,
  setLoggedIn: () => {},
});
