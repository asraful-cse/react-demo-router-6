import React, { useState } from "react";
import MenuListItem from "./MenuListItem";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import manuLits from "../lib/ManuItems";
function Navbar(props) {
  const [open, setOpen] = useState(false);
 
const toggleHandler =() =>{
  setOpen(!open)
}

  return (
    <nav className="bg-gray-600 w-full">
      <div
        className="md:hidden h-6 w-6 text-yellow-500"
        onClick={toggleHandler}
      >
        {open ? <XMarkIcon /> : <Bars2Icon />}
      </div>

      <ul
        className={` p-4 bg-gray-600 w-full text-center md:flex justify-center  md:bg-gray-600 absolute md:static   text-white  duration-500 ease-in gap-3 uppercase  ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {manuLits.map((manu) => (
          <MenuListItem key={manu.id} manu={manu}></MenuListItem>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
