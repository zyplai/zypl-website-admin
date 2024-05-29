import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./logout.scss";

const Logout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="logoutContent">
          <div className="modal">
            <ExitToAppIcon
              className="icon"
              style={{
                backgroundColor: "rgba(255, 0, 0, 0.2)",
                color: "red",
              }}
            />
            <p className="textLogout">Are you sure you want to log out?</p>
            <Button className="buttonLogout" onClick={handleClick}>
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
