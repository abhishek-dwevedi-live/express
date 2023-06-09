import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleLogout = () => {
    console.log("logout clicked");
  };

  const getLogo = () => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 40 40"
      >
        <rect
          x="-4"
          y="-4"
          className="st0"
          fill="none"
          width="48"
          height="48"
        ></rect>
        <g>
          <polygon
            className="st1"
            fill="#56368A"
            points="24.5,10 30,11 34.5,10 24.5,0 23.2,4.7"
          ></polygon>
          <path
            className="st2"
            fill="#7248B9"
            d="M24.5,10V0H8.2C6.7,0,5.5,1.2,5.5,2.7v34.5c0,1.5,1.2,2.7,2.7,2.7h23.6c1.5,0,2.7-1.2,2.7-2.7V10H24.5z"
          ></path>
          <path
            className="st3"
            fill="#FFFFF3"
            d="M13.2,28.9c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4 C14.5,28.2,13.9,28.9,13.2,28.9z M13.2,23.4c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4S13.9,23.4,13.2,23.4z M13.2,17.9c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C14.5,17.3,13.9,17.9,13.2,17.9z M28.2,28.6H16.8 v-2.3h11.4V28.6z M28.2,23.2H16.8v-2.3h11.4V23.2z M28.2,17.7H16.8v-2.3h11.4V17.7z"
          ></path>
        </g>
      </svg>
    );
  };

  function handlclick() {
    navigate("/home");
  }

  return (
    <div className="header-container">
      <div className="navigation-container">
        <div className="left-navigation-container" >
          <div className="logo-container" onClick={handlclick}>
            <div className="logo">{getLogo()}</div>
            <span>Forms Express</span>
      
          </div>
        </div>

        <div className="right-navigation-container">
          <div className="header-menu">
            <button className="header-profile-btn" onClick={toggleMenu}>
              <div id="profileImage"> A</div>
              <span className="header-profile-arrow">&#9660;</span>
            </button>
            {isMenuOpen && (
              <ul className="header-profile-menu">
                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
