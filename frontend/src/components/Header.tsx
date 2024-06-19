import React from "react";
import {
  Card,
  Typography,
  List,
  ListItemPrefix,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Menus = [
  { title: "Dashboard", icon: "Presentation_Chart", link: "/Dashboard" },
  { title: "Offres", icon: "Briefcase", link: "/Offres" },
  { title: "Ma sélection", icon: "Bookmark", link: "/Selection" },
  { title: "Paramètres", icon: "Params", link: "/Settings" },
  { title: "Connexion", icon: "Connexion", link: "/Connexion" },
];

const icons: { [key: string]: string } = {
  Presentation_Chart:
    "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  Briefcase:
    "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
  Bookmark:
    "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z",
  Params:
    "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z",
  Connexion: "M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9",
};

export default function Header() {
  const [sidenavOpen, setSidenavOpen] = React.useState(true);
  return (
    <Card
      className={` ${
        sidenavOpen ? "w-72" : "w-20 "
      } relative duration-100 h-100vh p-1 shadow-xl bg-primary-base rounded-none`}
    >
      <ListItemPrefix className="text-secondary-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-secondary-light
                         border-2 rounded-full size-6  ${
                           !sidenavOpen && "rotate-180"
                         }`}
          onClick={() => setSidenavOpen(!sidenavOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </ListItemPrefix>

      <div className="flex flex-col items-center gap-2 p-4">
         <img
            src={
              sidenavOpen
                ? "/logo_open_state.svg"
                : "/logo_close_state.svg"
            }
            className={`cursor-pointer duration-500 ${
              sidenavOpen && "rotate-[360deg]"
            }`}
            alt="Logo"
          />
      </div>

      <hr className=" border-primary-dark" />
      {sidenavOpen ? (
        <List>
          {Menus.map((menu, index) => (
            <Link key={index} to={menu.link}>
              <Button className="flex items-center gap-3 w-full bg-primary-base hover:bg-primary-dark focus:bg-primary-light shadow-none">
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
                      d={icons[menu.icon]}
                    />
                  </svg>
                </ListItemPrefix>
                <Typography
                  variant="h5"
                  color="white"
                  className={`${
                    !sidenavOpen && "hidden"
                  } origin-left duration-200 ml-2`}
                >
                  {menu.title}
                </Typography>
              </Button>
            </Link>
          ))}
        </List>
      ) : (
        <List className="gap-2">
          {Menus.map((menu, index) => (
            <Link key={index} to={menu.link}>
              <IconButton className="flex items-center w-full bg-primary-base hover:bg-primary-dark focus:bg-primary-light ml-2 shadow-none">
                <ListItemPrefix className="text-white mr-0">
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
                      d={icons[menu.icon]}
                    />
                  </svg>
                </ListItemPrefix>
              </IconButton>
            </Link>
          ))}
        </List>
      )}
    </Card>
  );
}
