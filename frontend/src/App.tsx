// import styled from "@emotion/styled";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home.tsx";
import Page404 from "./pages/Page404";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Settings from "./pages/Setting.tsx";
import { Authenticated } from "./auth/Authenticated";
import OffersPage from "./pages/OffersPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/manager",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "offres",
        element: <div>Offre</div>,
        // element: <Offres />,
      },
      {
        path: "selection",
        element: <div>Offre</div>,
        // element: <Selection />,
      },
      {
        path: "parametres",
        // element: <div>Offre</div>,
        element: <Settings />,
      },
    ],
  },
]);

const path = window.location.pathname;
if (path === "/manager" || path === "/manager/") {
  console.log(window.location);
  window.location.pathname = "/manager/dashboard";
}

function Layout() {
  return (
    <>
      <Header />
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-4 bg-gray-lightest dark:bg-gray-base">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export function App() {
  return <RouterProvider router={router} />;
}
