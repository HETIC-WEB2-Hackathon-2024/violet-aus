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
import Favorites from "./pages/Favorites.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
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
        element: <OffersPage />,
      },
      {
        path: "selection",
        element: <Favorites />,
      },
      {
        path: "parametres",
        element: <Settings />,
      },
    ],
  },
]);

const path = window.location.pathname;
if (path === "/manager" || path === "/manager/") {
  window.location.pathname = "/manager/dashboard";
}

function Layout() {
  return (
    <div className="flex h-screen">
      <Header />
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-4 bg-gray-lightest dark:bg-gray-base overflow-auto">
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
