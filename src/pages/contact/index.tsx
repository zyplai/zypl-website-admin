import React from "react";
import "./contact.scss";
import Sidebar from "components/sidebar/Sidebar";
import Navbar from "components/navbar/Navbar";

const Contact = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <form action="" className="home">
          <div className="content">
            <div className="ru">
              <h2>RU</h2>
            </div>
            <div className="en">
              <h2>EN</h2>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;