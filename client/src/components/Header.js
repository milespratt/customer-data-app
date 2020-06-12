// DEPENDENCIES
import React from "react";
import { Link } from "react-router-dom";

// ASSETS
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <h1>CDA</h1>
        <img
          src={logo}
          alt="customer data app"
          className="header__logo__image"
        />
      </Link>
      <span className="header__message">
        Welcome back, Customer Administrator
      </span>
    </header>
  );
}
