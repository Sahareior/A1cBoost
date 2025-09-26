import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop/Desktop";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ from react-router-dom
import Layout from "./layout/Layout";


import PolicyUp from "./screens/Desktop/sections/Policy/PolicyUp";
import Terms from "./screens/Desktop/Terms/Terms";
import AccountDelete from "./screens/Desktop/AccountDelete/AccountDelete";
import HelpNSupport from "./screens/Desktop/HelpNSupport/HelpNSupport";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Desktop />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/policy",
        element: <PolicyUp />,
      },
      {
        path:'/terms',
        element: <Terms />
      },
      {
        path:'/account-delete',
        element: <AccountDelete />
      },
      {
        path: '/help',
        element: <HelpNSupport />
      }

    ],
  },
]);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
