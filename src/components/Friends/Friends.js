import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "./Friend";

const Friends = () => {
  const friends = useLoaderData();

  return (
    <div >
      <h1 className="text-center">Friens Lists: {friends.length}</h1>

      <div className="p-2 grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-2 grid-col-1 border-l gap-2 ">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
