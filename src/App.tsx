import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import Ecosystem from "pages/ecosystem";
import News from "pages/news";
import Vacancy from "pages/vacancy";
import Contact from "pages/contact";
import About from "pages/about";
import Logout from "pages/logout";

function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
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
    </>
    // </div>
  );
}

export default App;
