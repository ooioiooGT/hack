import { React } from "react";
import nav from "./navigation.module.css";
import logo from "./loginpage/logo.svg";
import { logout } from "../api/firebase";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarsIcon from "@mui/icons-material/Stars";
import ArticleIcon from "@mui/icons-material/Article";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

function Navigation({ body }) {
  async function handleLogout() {
    try {
      await logout();
      console.log("logout");
    } catch {}
  }
  return (
    <div class={nav.overall}>
      <div class={nav.container}>
        <div class={nav.logo}>
          <img src={logo} alt="EaseHeal Logo" />
          <h1>
            <span id={nav.ease}>Ease</span>
            <span id={nav.heal}>Heal</span>
          </h1>
        </div>

        <div class={nav.menuItems}>
          <Link class={nav.link} to="/Dashboard">
            <HomeOutlinedIcon style={{ color: "7e6004" }} />

            <a class={nav.item} href="#section">
              Home
            </a>
          </Link>
          <Link to="/Grief">
            <FavoriteIcon style={{ color: "7e6004" }} />

            <a class={nav.item} href="#section">
              Grief Guidance
            </a>
          </Link>

          <Link to="/Journal">
            <DriveFileRenameOutlineIcon style={{ color: "7e6004" }} />

            <a class={nav.item} href="#section">
              Grief Journal
            </a>
          </Link>

          <Link to="/Community">
            <PeopleAltIcon style={{ color: "7e6004" }} />

            <a class={nav.item} href="#section">
              Community Support
            </a>
          </Link>

          <Link to="/MemorialPage">
            <StarsIcon style={{ color: "7e6004" }} />
            <a class={nav.item} href="#section">
              Memorials
            </a>
          </Link>

          <Link to="/Resources">
            <ArticleIcon style={{ color: "7e6004" }} />

            <a class={nav.item} href="#section">
              Resources Center
            </a>
          </Link>

          <Link to="/">
            <LogoutIcon style={{ color: "7e6004" }} />

            <a style={{ color: "7e6004" }} onClick={handleLogout}>
              {" "}
              Log Out{" "}
            </a>
          </Link>

          <image src={logo} alt="EaseHeal Logo" />
        </div>
      </div>
      <div class={nav.rightSection}>{body}</div>
    </div>
  );
}

export default Navigation;
