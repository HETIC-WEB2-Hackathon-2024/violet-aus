// import styled from "@emotion/styled";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
