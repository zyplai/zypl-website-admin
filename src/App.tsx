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
import Ecosystem from "pages/ecosystem";
import News from "pages/news";
import Vacancy from "pages/vacancy";
import Contact from "pages/contact";
import About from "pages/about";
import Logout from "pages/logout";

function App() {
  // const { darkMode } = useContext(DarkModeContext);

  return (
    // <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<List />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/news" element={<News />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
