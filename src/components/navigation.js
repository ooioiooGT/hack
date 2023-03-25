import { React } from "react";
import nav from "./navigation.module.css";
import logo from "./loginpage/logo.svg";

function Navigation({ body }) {
  return (
    <div class={nav.overall}>
      <div class={nav.container}>
        <div>
          <image src={logo} alt="EaseHeal Logo" />
          <h1>
            <span id={nav.ease}>Ease</span>
            <span id={nav.heal}>Heal</span>
          </h1>
        </div>
        <div class={nav.menuItems}>
          <a class={nav.item} href="#section">
            Home
          </a>
          <a class={nav.item} href="#section">
            Grief Guidance
          </a>
          <a class={nav.item} href="#section">
            Community Support
          </a>
          <a class={nav.item} href="#section">
            Resource Center
          </a>
          <a class={nav.item} href="#section">
            Memorials
          </a>
        </div>
      </div>
      <div class={nav.rightSection}>{body}</div>
    </div>
  );
}

export default Navigation;