import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { authenticatedGet, authenticatedPost } from "../auth/helper";

function Settings() {
  // const { user, logout } = useAuth0();
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const [candidateInfo, setCandidateInfo] = useState({
    lastname: data?.nom || "",
    firstname: data?.prenom || "",
    telephone: data?.telephone || "",
    country: data?.pays || "",
    birthday: data?.birthday || "",
    email: data?.email || "",
  });

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

  useEffect(() => {
    if (data && !isInitialized) {
      setCandidateInfo({
        lastname: data.nom || "",
        firstname: data.prenom || "",
        telephone: data.telephone || "",
        country: data.pays || "",
        birthday: dateOfBirth || "",
        email: data.email || "",
      });
      setIsInitialized(true);
    }
  }, [data, dateOfBirth, isInitialized]);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function handleChange(
    field: any,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setCandidateInfo((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
    if (field == "birthday") {
      setDateOfBirth(event.target.value);
    }
  }

  async function updateCandidate(event: any) {
    event.preventDefault();
    try {
      const token = await getAccessTokenSilently();
      const response = await authenticatedPost(token, "api/private/settings", {
        candidateInfo,
      });
      console.log(response);
    } catch (error) {
      setError(`Error from web service: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="text-h1 text-center m-2">Paramètres</h1>
      <form className="flex gap-4 flex-col">
        <p>E-mail : {data?.email}</p>
        <div>
          <label htmlFor="lastname">Nom : </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            className="border-2"
            defaultValue={data?.nom}
            onChange={(event) => handleChange("lastname", event)}
          />
        </div>
        <div>
          <label htmlFor="firstname">Prénom : </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            className="border-2"
            defaultValue={data?.prenom}
            onChange={(event) => handleChange("firstname", event)}
          />
        </div>
        <div>
          <label htmlFor="telephone">Téléphone : </label>
          <input
            id="telephone"
            name="telephone"
            type="text"
            className="border-2"
            maxLength={12}
            defaultValue={data?.telephone}
            onChange={(event) => handleChange("telephone", event)}
          />
        </div>
        <div>
          <label htmlFor="country">Pays : </label>
          <input
            id="country"
            name="country"
            type="text"
            className="border-2"
            defaultValue={data?.pays}
            onChange={(event) => handleChange("country", event)}
          />
        </div>
        <div>
          <label htmlFor="birthday">Date de naissance : </label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            className="border-2"
            defaultValue={dateOfBirth || ""}
            onChange={(event) => handleChange("birthday", event)}
          />
        </div>
        <div className="w-fit">
          <input
            className="p-4 flex items-center gap-3 w-full bg-primary-base hover:bg-primary-dark focus:bg-primary-light"
            type="submit"
            value="Mettre à jour"
            onClick={(event) => updateCandidate(event)}
          />
        </div>
      </form>
    </div>
  );
}

export default Settings;
