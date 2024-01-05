import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="w-full p-7 flex items-center justify-between">
        <div className="left">
          <Link to={"/home"}>
            <h1 className="font-bold text-3xl text-white">
              Khadimul <span className="text-secoundary">Haramain</span>
            </h1>
            <p className="text-white">TOUR N TRAVLES</p>
          </Link>
        </div>
        <div className="right">
          <ul className="flex items-center justify-center gap-12 text-white">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Umrah</Link>
            </li>
            <li>
              <Link>Hajj</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
