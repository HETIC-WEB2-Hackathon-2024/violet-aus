import { Button, ListItemPrefix, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="bg-gray-lightest dark:bg-gray-700 min-h-screen flex items-center justify-center px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-light_white dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-light_white dark:bg-yellow-800 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-1500"></div>
        <div className="absolute -bottom-20 left-24 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-3000"></div>
        <div className="m-8 relative space-y-4 ">
          <div className="flex flex-col items-center justify-center p-5 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-xl border border-none">
            <Typography
              color="black"
              className="mb-4 text-gray-darkest dark:text-gray-lightest text-h4 font-black"
            >
              OH LA CHKOUMOUNE !
            </Typography>
            <Typography className="mb-8 text-gray-darkest dark:text-gray-lightest text-h6 font-normal text-center">
              La page que vous recherchez semble introuvable :/
            </Typography>
            <Link to="/">
              <Button className="flex items-center gap-3 w-full bg-primary-base_white dark:bg-primary-base_dark hover:bg-primary-dark_white dark:hover:bg-primary-dark_dark focus:bg-primary-light_white dark:focus:bg-primary-light_dark shadow-none">
                <ListItemPrefix className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>
                </ListItemPrefix>
                <Typography variant="h5" color="white">
                  Revenir à la page d'accueil
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
