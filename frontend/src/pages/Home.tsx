import { useAuth0 } from "@auth0/auth0-react";
import { Button, ListItemPrefix, Typography } from "@material-tailwind/react";

const Home = () =>  {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div>
        THIS PAGE IT'S NOT FINISH
      </div>
      <Button onClick={()=>loginWithRedirect()} className="flex items-center gap-3 w-full bg-primary-base hover:bg-primary-dark focus:bg-primary-light shadow-none">
        <ListItemPrefix className="text-white">
        <img src="/on.svg" alt="On" />
        </ListItemPrefix>
        <Typography
          variant="h5"
          color="black"
          className={`origin-left duration-200 ml-2`}
        >
          Connexion
        </Typography>
      </Button>
    </>
  )
}
export default Home
