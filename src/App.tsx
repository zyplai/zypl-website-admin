import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
// import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";
import React from "react";

function App() {
  // const { darkMode } = useContext(DarkModeContext);

  return (
    // <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="home">
            <Route index element={<List />} />
            {/* <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
          </Route>
          <Route path="products">
            <Route index element={<List />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
