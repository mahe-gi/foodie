import { useState } from "react";
import { Link } from "react-router-dom";

const Navmenu = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div id="navmenu">
      <ul id="listWrapper">
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="links" to="/contact">
            Contact Us
          </Link>
        </li>
        <button
          className="login"
          onClick={() => {
            btnName === "login" ? setBtnName("logout") : setBtnName("login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Navmenu;
