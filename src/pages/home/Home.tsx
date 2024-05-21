import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import ActiveBank from "../../assets/images/Active.png";
import ALhilal from "../../assets/images/ALhilal.png";
import AhliMicrofinance from "../../assets/images/Ahli-microfinance.png";
import Ahlibank from "../../assets/images/Ahlibank.png";
import Aladin from "../../assets/images/Aladin.png";
import Aloqa from "../../assets/images/Aloqa.png";
import Anor from "../../assets/images/Anor.png";
import Arnur from "../../assets/images/Arnur.png";
import BankOfAsia from "../../assets/images/BankOfAsia.png";
import BankAlbilad from "../../assets/images/Bank_Albilad_logo.png";
import Bereke from "../../assets/images/Bereke.png";
import CBI from "../../assets/images/CBI.png";
import CIB from "../../assets/images/CIB.png";
import Credible from "../../assets/images/Credible.png";
import Deloitte from "../../assets/images/Deloitte.png";
import Finance from "../../assets/images/Finance.png";
import FincaBank from "../../assets/images/Finca-bank.png";
import FincaKG from "../../assets/images/FincaKG.png";
import Hamkor from "../../assets/images/Hamkor.png";
import Pertalife from "../../assets/images/Pertalife.png";
import Texnomart from "../../assets/images/Texnomart.png";
import BankOfBaku from "../../assets/images/bank of Baku.png";
import Blink from "../../assets/images/blink.png";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px",
            textAlign: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div className="listContainer">
            <img src={ActiveBank} alt="" />
          </div>
          <div className="listContainer">
            <img src={ALhilal} alt="" />
          </div>
          <div className="listContainer">
            <img src={AhliMicrofinance} alt="" />
          </div>
          <div className="listContainer">
            <img src={Ahlibank} alt="" />
          </div>
          <div className="listContainer">
            <img src={Aladin} alt="" />
          </div>
          <div className="listContainer">
            <img src={Aloqa} alt="" />
          </div>
          <div className="listContainer">
            <img src={Anor} alt="" />
          </div>
          <div className="listContainer">
            <img src={Arnur} alt="" />
          </div>
          <div className="listContainer">
            <img src={BankOfAsia} alt="" />
          </div>
          <div className="listContainer">
            <img src={Bereke} alt="" />
          </div>
          <div className="listContainer">
            <img src={CBI} alt="" />
          </div>
          <div className="listContainer">
            <img src={CIB} alt="" />
          </div>
          <div className="listContainer">
            <img src={Credible} alt="" />
          </div>
          <div className="listContainer">
            <img src={Deloitte} alt="" />
          </div>
          <div className="listContainer">
            <img src={Finance} alt="" />
          </div>
          <div className="listContainer">
            <img src={BankAlbilad} alt="" />
          </div>
          <div className="listContainer">
            <img src={FincaBank} alt="" height={"40px"} />
          </div>
          <div className="listContainer">
            <img src={FincaKG} alt="" />
          </div>
          <div className="listContainer">
            <img src={Hamkor} alt="" />
          </div>
          <div className="listContainer">
            <img src={Pertalife} alt="" />
          </div>
          <div className="listContainer">
            <img src={Texnomart} alt="" />
          </div>
          <div className="listContainer">
            <img src={BankOfBaku} alt="" />
          </div>
          <div className="listContainer">
            <img src={Blink} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
