import React from "react";
import { Link } from "react-router-dom";

function MenuListItem({ manu }) {
  return (
    <div className=" ">
      <Link to={manu.path}>
        <p className="hover:overflow-hidden hover:border-b-[1px] hover:h-auto hover:text-green-300 cursor-pointer hover:duration-300">
          {manu.name}
        </p>
      </Link>
    </div>
  );
}

export default MenuListItem;
