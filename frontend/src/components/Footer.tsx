import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full bg-gray-light dark:bg-gray-darkest p-2">
      <Typography
        color="blue-gray"
        className="text-center font-normal text-gray-lightest"
      >
        &copy; 2024 Adopte un{" "}
        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">stagiaire</Link>
      </Typography>
    </footer>
  );
}
