import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Page404 from "./pages/Page404.tsx"
import ProgressBar from "./components/ProgressBar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard/>,
      },
      {
        path: "progressBar",
        element: <ProgressBar/>,
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
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

function Layout() {
  return (
    <div className="flex h-screen">
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
