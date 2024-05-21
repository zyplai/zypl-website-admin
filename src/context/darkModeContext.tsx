// import React from "react";
// import { createContext, useReducer } from "react";
// import DarkModeReducer from "./darkModeReducer";

// type ContextProviderProps = {
//   children: React.ReactNode;
// };

// const INITIAL_STATE = {
//   darkMode: false,
// };

// export const DarkModeContext = createContext(INITIAL_STATE);

// export const DarkModeContextProvider = ({ children }: ContextProviderProps) => {
//   const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

//   return (
//     <DarkModeContext.Provider value={{ darkMode: state.darkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };
