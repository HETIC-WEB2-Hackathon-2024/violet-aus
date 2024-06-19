import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Settings from "./pages/Setting.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "Dashboard",
      //   element: <Dashboard />,
      // },
      // {
      //   path: "Offres",
      //   element: <Offres />,
      // },
      // {
      //   path: "Selection",
      //   element: <Selection />,
      // },
       {
         path: "Settings",
         element: <Settings />,
       },
      // {
      //   path: "Connexion",
      //   element: <Connexion />,
      // },
    ],
  },
]);

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
