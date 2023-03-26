import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Friends from "./components/Friends/Friends";
import Home from "./components/home/Home";
import Main from "./layout/navLayOut/NavLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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
