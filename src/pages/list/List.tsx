import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import InfoIcon from "@mui/icons-material/Info";
import ModalCenter from "components/modal-center";
import ZyplAi from "../../assets/screenshot/home1.png";
import Home2 from "../../assets/screenshot/home2.png";
import Home3 from "../../assets/screenshot/home3.png";
import Home4 from "../../assets/screenshot/home4.png";
import Home5 from "../../assets/screenshot/home5.png";
import { useState } from "react";
import Textarea from "components/textarea";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="home">
          <div className="ru">
            <h2>RU</h2>
            <Textarea title={"zypl.ai"} imgSrc={ZyplAi}/>
            <Textarea title={"новаторские синтетические данные для оптимизации кредитного скоринга"} imgSrc={Home2}/>
            <Textarea title={"zypl's ai экосистема"} imgSrc={Home3}/>
            <Textarea title={"Банки строят модели кредитного скоринга, склонные к нормальному распределению - для мира 'черных лебедей', которые являются аномальными"} imgSrc={Home4}/>
            <Textarea title={"zypl.score"} imgSrc={Home5}/>
          </div>

          <div className="en">
            <h2>EN</h2>
            <Textarea title={"zypl.ai"} imgSrc={ZyplAi}/>
            <Textarea title={"pioneering synthetic data to optimize credit scoring"} imgSrc={Home2}/>
            <Textarea title={"zypl's ai ecosystem"} imgSrc={Home3}/>
            <Textarea title={"banks build credit scoring models that are prone to normal distributions - for a world of 'black swans' that are abnormal"} imgSrc={Home4}/>
            <Textarea title={"zypl.score"} imgSrc={Home5}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
