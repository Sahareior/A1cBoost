import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop/Desktop";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ from react-router-dom
import Layout from "./layout/Layout";
import PolicyUp from "./screens/Desktop/sections/Policy/PolicyUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Desktop />,
  },
  // sadffdasdc
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "policy",
        element: <PolicyUp />,
      },

    ],
  },
]);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
