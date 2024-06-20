import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { authenticatedGet, authenticatedPost } from "../auth/helper";
import {
  Input,
  Button,
  Spinner,
  Alert,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

function Settings() {
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
    birthday: dateOfBirth || "",
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
          const formatDate = (dateStr: any) => {
            const date = new Date(dateStr);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
          };
          const formattedDate = formatDate(response.user.date_naissance);
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
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Alert color="red">{error}</Alert>
      </div>
    );
  }

  function handleChange(
    field: any,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setCandidateInfo((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
    if (field === "birthday") {
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
    <div className="container mx-auto p-4">
      <h3 className="text-h3 text-center mb-4 text-primary-base_white dark:text-primary-light_white font-bold uppercase">
        Paramètres
      </h3>
      <Card className="max-w-lg mx-auto bg-gray-lightest dark:bg-gray-base dark:text-gray-lightest border border-gray-light dark:border-gray-lightest shadow-none">
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={updateCandidate}>
            <Input
              id="email"
              label="E-mail"
              variant="outlined"
              value={candidateInfo.email}
              className="dark:bg-gray-dark dark:text-gray-lightest opacity-80 dark:opacity-60"
              readOnly
              crossOrigin=""
            />
            <Input
              id="lastname"
              label="Nom"
              variant="outlined"
              value={candidateInfo.lastname}
              onChange={(event) => handleChange("lastname", event)}
              className="dark:bg-gray-dark dark:text-gray-lightest"
              crossOrigin=""
            />
            <Input
              id="firstname"
              label="Prénom"
              variant="outlined"
              value={candidateInfo.firstname}
              onChange={(event) => handleChange("firstname", event)}
              className="dark:bg-gray-dark dark:text-gray-lightest"
              crossOrigin=""
            />
            <Input
              id="telephone"
              label="Téléphone"
              variant="outlined"
              value={candidateInfo.telephone}
              onChange={(event) => handleChange("telephone", event)}
              className="dark:bg-gray-dark dark:text-gray-lightest"
              crossOrigin=""
            />
            <Input
              id="country"
              label="Pays"
              variant="outlined"
              value={candidateInfo.country}
              onChange={(event) => handleChange("country", event)}
              className="dark:bg-gray-dark dark:text-gray-lightest"
              crossOrigin=""
            />
            <Input
              id="birthday"
              label="Date de naissance"
              type="date"
              variant="outlined"
              value={candidateInfo.birthday}
              onChange={(event) => handleChange("birthday", event)}
              className="dark:bg-gray-dark dark:text-gray-lightest"
              crossOrigin=""
            />
            <CardFooter className="pt-0">
              <Button
                type="submit"
                className="bg-primary-dark_white dark:bg-primary-base_white text-gray-lightest"
                fullWidth
              >
                Mettre à jour
              </Button>
            </CardFooter>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Settings;
