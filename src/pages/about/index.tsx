import React from "react";
import "./about.scss";
import Sidebar from "components/sidebar/Sidebar";
import Navbar from "components/navbar/Navbar";

const About = () => {
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

export default About;
