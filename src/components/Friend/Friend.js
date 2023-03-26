import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const {id, name, username, email } = friend;
  // console.log(friend);
  return (
    <div className="p-4 bg-slate-600 text-white rounded">
      <h1>Name: {name}</h1>
      <h2>User name: {username}</h2>
      <h3>
        <small>Email:{email}</small>
      </h3>

      <button className="bg-red-300 p-1 rounded "><Link to={`/friend/${id}`}>Button</Link></button>
    </div>
  );
};

export default Friend;
