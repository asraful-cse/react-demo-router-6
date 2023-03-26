import React from "react";
import { Link, Outlet } from "react-router-dom";

function About(props) {
  return (
    <div className="text-center">
      <h1 className='text-4xl  text-amber-400 p-5'>this is original about page</h1>
      <Link className="p-2 text-white uppercase border-2 bg-green-900 hover:text-yellow-300" to="ping">ping</Link>
      <Link className="p-2 text-white uppercase border-2 bg-green-900 hover:text-yellow-300" to="ching">ching</Link>

      <Outlet></Outlet>
    </div>
  );
}

export default About;
