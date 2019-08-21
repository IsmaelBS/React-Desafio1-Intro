import React from "react";
import facebookLogo from "../../../public/Assets/img/facebook.png";
import userLogo from "../../../public/Assets/img/user.png";
import "./Header.css";

function Header() {
  return (
    <header className="main_header">
      <div className="header_content">
        <img src={facebookLogo} alt="Facebook Logo" />
        <div className="profile_content">
          Meu perfil
          <i>
            <img width="32" height="32" src={userLogo} alt="Logo usuário" />
          </i>
        </div>
      </div>
    </header>
  );
}

export default Header;
