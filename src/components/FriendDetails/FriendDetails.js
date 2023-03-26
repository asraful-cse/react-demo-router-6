import React from "react";
import { useLoaderData } from "react-router-dom";

function FriendDetails(props) {
  const friend = useLoaderData();
  console.log({ friend });
  const { name, username } = friend;
  const { catchPhrase } = friend.company;
  const { geo } = friend.address;
  return (
    <div className="p-4">
      <h1 className="text-4xl text-center text-amber-400">
        Friend Details page
      </h1>
     <div className="pt-6">
     <div className="text-center rounded bg-slate-300 text-2xl  text-green-800 border-2 p-4">
        <p>{name}</p>
        <p>{username}</p>
        <p>{catchPhrase}</p>
        <p>{geo.lng}</p>
      </div>
     </div>
    </div>
  );
}

export default FriendDetails;
