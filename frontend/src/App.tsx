import { RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";

import "./index.css";
import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { Authenticated } from "./auth/Authenticated.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/manager",
    element: <Authenticated><Layout /></Authenticated>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard/>,
      },
      // {
      //   path: "Offres",
      //   element: <Offres />,
      // },
      // {
      //   path: "Selection",
      //   element: <Selection />,
      // },
      // {
      //   path: "Parametres",
      //   element: <Parametres />,
      // },
      // {
      //   path: "Connexion",
      //   element: <Connexion />,
      // },
    ],
  }
]);

const path = window.location.pathname
if (path === '/manager' || path === '/manager/'){
  console.log(window.location)
  window.location.pathname = '/manager/dashboard'
}

function Layout() {
  return (
    <div className="flex h-screen">
      <Header />
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-4">
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
