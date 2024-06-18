// import styled from "@emotion/styled";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import Settings from "./pages/Setting.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
    ],
  },
  {
    path: "/parametres",
    element: <Settings />,
    children: [
    ],
  },
]);

function Layout() {
  return (
    <>
        <Header />
        <Footer />
    </>
  );
}

export function App() {
  return <RouterProvider router={router} />;
}
