import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../../landing_components/Button";
import Product from "../dropDown/Product";
import UseCase from "../dropDown/useCase";

export default function NavBar() {
  const [phover, setPHover] = useState(false);
  const [chover, setCHover] = useState(false);

  const handlePEnter = () => {
    setCHover(false);
    setPHover(true);
  };

  const handleCEnter = () => {
    setCHover(true);
    setPHover(false);
  };

  const handleLeave = () => {
    setCHover(false);
    setPHover(false);
  };

  return (
    <div>
      <div className=" h-24 flex items-center justify-evenly">
        <div className=" h-full w-1/4 flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/img/logo.jpg`}
            alt="logo"
            className=" h-20 w-40 object-cover"
          />
        </div>
        <div className="nav-link  h-full w-2/5">
          <ul className="flex justify-between items-center h-full font-medium">
            <li
              className=" hover:text-orange-400 transition h-full flex items-center cursor-pointer"
              onMouseEnter={handlePEnter}
              onMouseLeave={handleLeave}
            >
              Product <FontAwesomeIcon className=" pl-2" icon={faCaretDown} />
            </li>
            <li
              className=" hover:text-orange-400 transition h-full flex items-center cursor-pointer"
              onMouseEnter={handleCEnter}
              onMouseLeave={handleLeave}
            >
              Use Case <FontAwesomeIcon className=" pl-2" icon={faCaretDown} />
            </li>
            <li className=" hover:text-orange-400 transition h-full flex items-center cursor-pointer">
              About Us
            </li>
            <li className=" hover:text-orange-400 transition h-full flex items-center cursor-pointer">
              Plans
            </li>
            <li className=" hover:text-orange-400 transition h-full flex items-center cursor-pointer">
              Resource
            </li>
          </ul>
        </div>
        <div className=" h-5/6 w-2/6 flex items-center justify-center">
          <Button>Schedule a Demo</Button>
        </div>
      </div>
      <div className=" transition duration-700 ease-in">
        {phover && <Product onHover={handlePEnter} onLeave={handleLeave} />}
        {chover && <UseCase onHover={handleCEnter} onLeave={handleLeave} />}
      </div>
    </div>
  );
}
