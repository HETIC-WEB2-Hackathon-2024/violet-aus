import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { authenticatedGet, authenticatedPost } from "../auth/helper";
import {
  Card,
  Typography,
  List,
  ListItemPrefix,
  Button,
  IconButton,
} from "@material-tailwind/react";

function Settings() {
  const { user, logout } = useAuth0();
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState<string | null>(null);

  useEffect(() => {
    async function callApi() {
      try {
        const token = await getAccessTokenSilently();
        // if (!email) {
        //   throw new Error("User email is not available");
        // }
        const response = await authenticatedPost(
          token,
          "api/private/settings",
          {
            user,
          }
        );
        // const response = await authenticatedGet(token, "api/private/settings");

        // if (response[0] && response[0].date_naissance) {
        //   const dateObj = new Date(response[0].date_naissance);
        //   const formattedDate = dateObj.toISOString().split("T")[0]; // Format ISO 8601 sans l'heure
        //   setDateOfBirth(formattedDate);
        // } else {
        //   throw new Error("Date of birth not found in response");
        // }
        setData(response);
        console.log(response);
      } catch (error) {
        setError(`Error from web service: ${error}`);
      } finally {
        setLoading(false);
      }
    }
    callApi();
  }, [getAccessTokenSilently]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDateOfBirthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDateOfBirth(event.target.value);
  };

  return (
    <div>
      <h1 className="text-h1">Mes paramètres</h1>
      <p>Utilisateur : {user?.email}</p>
      {/* {data?.map((profil: any) => ( */}
      <form
      // key={profil.id}
      className="flex gap-4 flex-col"
      >
        <div>
          <label htmlFor="lastname">Nom</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            className="border-2"
            //   value={profil.nom}
            //   onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            className="border-2"
            //   value={profil.prenom}
            //   onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          <label htmlFor="telephone">Téléphone</label>
          <input
            id="telephone"
            name="telephone"
            type="text"
            className="border-2"
            //   value={profil.telephone}
            //   onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="text"
            className="border-2"
            //   value={profil.email}
            //   onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          <label htmlFor="country">Pays</label>
          <input
            id="country"
            name="country"
            type="text"
            className="border-2"
            //   value={profil.pays}
            //   onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          <label htmlFor="birthday">Date de naissance</label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            className="border-2"
            //   value={dateOfBirth || ""}
            //   onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          {/* <Button
            className="flex items-center gap-3 w-full bg-primary-base hover:bg-primary-dark focus:bg-primary-light"
            type="submit"
            value="Modifier"
          >
            <p className="text-white">Modifier</p>
          </Button> */}
          <input className="w-fit p-4 flex items-center gap-3 w-full bg-primary-base hover:bg-primary-dark focus:bg-primary-light" type="submit" value="Modifier" />
        </div>
      </form>
      {/* ))} */}
    </div>
  );
}

export default Settings;
