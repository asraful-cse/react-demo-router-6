import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import Main from "./layout/navLayOut/NavLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        {
          path: "about",
          element: <About />,
          children: [
            { path: "/about", element: <div>this is ping page</div> },
            { path: "ping", element: <div>this is ping page</div> },
            { path: "ching", element: <div>this is ching page</div> },
          ],
        },
        { path: "blog", element: <Blog /> },
        { path: "contact", element: <Contact /> },
        {
          path: "friends",
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
          element: <Friends />,
        },

        {
          path: "/friend/:friendId",

          loader: async ({ params }) => {
            // console.log(params.friendId);
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },

          element: <FriendDetails />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
