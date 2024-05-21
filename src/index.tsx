import ReactDOM from "react-dom/client";
import App from "./App";
// import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
  </>
);
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <DarkModeContextProvider> */}
//       <App />
//     {/* </DarkModeContextProvider> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );
