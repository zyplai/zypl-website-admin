import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./logout.scss";
import Button from "@mui/material/Button";

const Logout = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="content">
          <div className="modal">
            <ExitToAppIcon
              className="icon"
              style={{
                backgroundColor: "rgba(255, 0, 0, 0.2)",
                color: "red",
              }}
            />
            <p className="textLogout">Are you sure you want to log out?</p>
            <Button className="buttonLogout">Log out</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
