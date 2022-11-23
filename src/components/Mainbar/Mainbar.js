import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa";

import "./Mainbar.css";

function Mainbar() {
  const [main, setMain] = useState(false);
  const handleMain = () => setMain(!main);
  return (
    <div className={main ? "Mainbar Mainbar-bg" : "Mainbar"}>
      <div className="logo">
        <h2>BOOK MY DOC</h2>
      </div>
      <ul className="my-menu">
        <li>Home</li>
        <li>Consult a doctor</li>
        <li>Tests and checkup</li>
        <li>Others</li>
      </ul>
      <div className="main-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div className="medical" onClick={handleMain}>
        {!main ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>
      <div className={main ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-main">
          <li>Home</li>
          <li>Consult a doctor</li>
          <li>Tests and checkup</li>
          <li>Others</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
