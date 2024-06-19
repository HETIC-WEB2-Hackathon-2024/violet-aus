import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { authenticatedGet, authenticatedPost } from "../auth/helper";
// import {
//   Card,
//   Typography,
//   List,
//   ListItemPrefix,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";

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
        const response = await authenticatedGet(token, "api/private/settings");

        setData(response.user);

        const dateObj = new Date(response.user.date_naissance);
        if (!isNaN(dateObj.getTime())) {
          const formattedDate = dateObj.toISOString().split("T")[0];
          setDateOfBirth(formattedDate);
        } else {
          throw new Error("Invalid date format");
        }
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
  console.log(data);
  return (
    <div>
      <h1 className="text-h1 text-center m-2">Paramètres</h1>
      <p>Utilisateur : {data?.nom}</p>
      <form className="flex gap-4 flex-col">
        <div>
          <p>Test e-mail candidat : candidat30@aus.floless.fr</p>
        </div>
        <div>
          <label htmlFor="lastname">Nom</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            className="border-2"
            value={data?.nom}
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            className="border-2"
            value={data?.prenom}
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          <label htmlFor="telephone">Téléphone</label>
          <input
            id="telephone"
            name="telephone"
            type="text"
            className="border-2"
            value={data?.telephone}
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          <label htmlFor="country">Pays</label>
          <input
            id="country"
            name="country"
            type="text"
            className="border-2"
            value={data?.pays}
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div>
          <label htmlFor="birthday">Date de naissance</label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            className="border-2"
            value={dateOfBirth || ""}
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div className="w-fit">
          <input
            className="p-4 flex items-center gap-3 w-full bg-primary-base hover:bg-primary-dark focus:bg-primary-light"
            type="submit"
            value="Modifier"
          />
        </div>
      </form>
    </div>
  );
}

export default Settings;
