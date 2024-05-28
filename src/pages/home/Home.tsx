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
import BRI from "../../assets/images/bri.png";
import BRT from "../../assets/images/brt.png";
import BTN from "../../assets/images/btn.png";
import CenterCredit from "../../assets/images/centercredit.png";
import Ceska from "../../assets/images/ceska.png";
import Commercbank from "../../assets/images/commecbank.png";
import Euroasia from "../../assets/images/euroasia.png";
import Fazos from "../../assets/images/fazos.png";
import FincaGlobal from "../../assets/images/finca-global.png";
import Finca from "../../assets/images/finca.png";
import Furuz from "../../assets/images/furuz.png";
import HomeCredit from "../../assets/images/homecredit.png";
import Humo from "../../assets/images/humo.png";
import Ibt from "../../assets/images/ibt.png";
import Imon from "../../assets/images/imon.png";
import Jado from "../../assets/images/jado.png";
import Microfinance from "../../assets/images/microfinance.png";
import Mycar from "../../assets/images/mycar.png";
import Oxus from "../../assets/images/oxus.png";
import Planet9 from "../../assets/images/planet9.png";
import Rata from "../../assets/images/rata.png";
import Spitamen from "../../assets/images/spitamen.png";
import Swisscapital from "../../assets/images/swisscapital.png";
import Tamam from "../../assets/images/tamam_logo.png";
import Kiva from "../../assets/images/svgexport-2 3.png";

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
            <img src={Furuz} alt="" />
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
          <div className="listContainer">
            <img src={BRI} alt="" />
          </div>
          <div className="listContainer">
            <img src={BRT} alt="" />
          </div>
          <div className="listContainer">
            <img src={BTN} alt="" />
          </div>
          <div className="listContainer">
            <img src={CenterCredit} alt="" />
          </div>
          <div className="listContainer">
            <img src={Ceska} alt="" />
          </div>
          <div className="listContainer">
            <img src={Commercbank} alt="" />
          </div>
          <div className="listContainer">
            <img src={Euroasia} alt="" />
          </div>
          <div className="listContainer">
            <img src={Fazos} alt="" />
          </div>
          <div className="listContainer">
            <img src={FincaGlobal} alt="" />
          </div>
          <div className="listContainer">
            <img src={Finca} alt="" />
          </div>
          <div className="listContainer">
            <img src={HomeCredit} alt="" />
          </div>
          <div className="listContainer">
            <img src={Humo} alt="" />
          </div>
          <div className="listContainer">
            <img src={Ibt} alt="" />
          </div>
          <div className="listContainer">
            <img src={Imon} alt="" />
          </div>
          <div className="listContainer">
            <img src={Jado} alt="" />
          </div>
          <div className="listContainer">
            <img src={Microfinance} alt="" />
          </div>
          <div className="listContainer">
            <img src={Mycar} alt="" />
          </div>
          <div className="listContainer">
            <img src={Oxus} alt="" />
          </div>
          <div className="listContainer">
            <img src={Planet9} alt="" />
          </div>
          <div className="listContainer">
            <img src={Rata} alt="" />
          </div>
          <div className="listContainer">
            <img src={Spitamen} alt="" />
          </div>
          <div className="listContainer">
            <img src={Swisscapital} alt="" />
          </div>
          <div className="listContainer">
            <img src={Tamam} alt="" />
          </div>
          <div className="listContainer">
            <img src={Kiva} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
