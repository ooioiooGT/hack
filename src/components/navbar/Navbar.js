import React from "react";
import navbar from "../navbar/navbar.modules.css";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarsIcon from "@mui/icons-material/Stars";
import ArticleIcon from "@mui/icons-material/Article";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../loginpage/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={{ height: "100vh" }}>
      <Sidebar style={{ height: "100vh" }}>
        <div class={navbar.logoHeading}>
          <img src={logo} alt="EaseHeal Logo" id={navbar.healLogo} />
          <h1>
            <span id={navbar.ease}>Ease</span>
            <span id={navbar.heal}>Heal</span>
          </h1>
        </div>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem component={<Link style={{ color: green[500]}} to="/Home" />} icon={<HomeOutlinedIcon />}>
            Home
          </MenuItem>
          <MenuItem component={<Link to="/Grief" />} icon={<FavoriteIcon />}>
            Grief Guidance
          </MenuItem>
          <MenuItem
            component={<Link to="/Journal" />}
            icon={<DriveFileRenameOutlineIcon />}
          >
            Grief Journal
          </MenuItem>

          <MenuItem
            component={<Link to="/Community" />}
            icon={<PeopleAltIcon />}
          >
            Community Support
          </MenuItem>
          <MenuItem component={<Link to="/Memorials" />} icon={<StarsIcon />}>
            Memorials
          </MenuItem>
          <MenuItem component={<Link to="/Resources" />} icon={<ArticleIcon />}>
            Resources Center
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Navbar;
