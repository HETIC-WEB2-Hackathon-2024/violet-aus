import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Spinner,
  Alert,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { authenticatedGet, authenticatedPatch } from "../auth/helper";

interface Candidate {
  nom?: string,
  prenom?: string,
  telephone?: string,
  pays?: string,
  date_naissance: Date,
  email: string
}

const defaultCandidate: Candidate = {
  date_naissance: new Date(),
  email: ''
};

function Settings() {
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Candidate>();
  const [error, setError] = useState<string | null>(null);
  const [candidateInfo, setCandidateInfo] = useState<Candidate>(defaultCandidate);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await authenticatedGet(token, "api/private/settings");
        const dateNaissance = new Date(response.user.date_naissance);
        setData({...response.user, date_naissance: dateNaissance});
      } catch (error){
        console.error(error)
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (data) {
      setCandidateInfo(data);
    }
  }, [data]);

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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCandidateInfo((prevState) => ({
      ...prevState,
      [name]: name === 'date_naissance' ? new Date(value) : value
    }));
  }
  async function updateCandidate(event: any) {
    event.preventDefault();
    try {
      const token = await getAccessTokenSilently();

      const body:any = {}
      if (candidateInfo === data){
        return
      } else {
        if (candidateInfo.pays !== data?.pays){
          body['pays'] = candidateInfo.pays
        }
        if (candidateInfo.nom !== data?.nom){
          body['nom'] = candidateInfo.nom
        }
        if (candidateInfo.prenom !== data?.prenom){
          body['prenom'] = candidateInfo.prenom
        }
        if (candidateInfo.date_naissance !== data?.date_naissance){
          const date = candidateInfo.date_naissance
          date.setHours(0, 0, 0, 0)
          date.setDate(candidateInfo.date_naissance.getDate() + 1)
          body['date_naissance'] = date
        }
      }
      
      const response = await authenticatedPatch(token, "api/private/settings", {
        ...body
      })
      console.log(response)

      const dateNaissance = new Date(response.data.date_naissance);
      setData({...response.data, date_naissance: dateNaissance});
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
              name="email"
              value={candidateInfo.email || ''}
              className="dark:bg-gray-dark dark:text-gray-lightest opacity-80 dark:opacity-60"
              readOnly
              crossOrigin=""
              color="purple"
            />
            <Input
              id="lastname"
              label="Nom"
              variant="outlined"
              name="nom"
              value={candidateInfo.nom || ''}
              onChange={(event) => handleChange(event)}
              className="dark:bg-gray-dark dark:text-gray-lightest"
              crossOrigin=""
              color="purple"
            />
            <Input
              id="firstname"
              label="Prénom"
              variant="outlined"
              name="prenom"
              value={candidateInfo.prenom || ''}
              onChange={(event) => handleChange(event)}
              className="dark:bg-gray-dark dark:text-gray-lightest"
              crossOrigin=""
              color="purple"
            />
            <Input
              id="telephone"
              label="Téléphone"
              variant="outlined"
              name="telephone"
              value={candidateInfo.telephone || ''}
              onChange={(event) => handleChange(event)}
              className="dark:bg-gray-dark dark:text-gray-lightest"
              crossOrigin=""
              color="purple"
            />
            <Input
              id="country"
              label="Pays"
              name="pays"
              variant="outlined"
              value={candidateInfo.pays || ''}
              onChange={(event) => handleChange(event)}
              className="dark:bg-gray-dark dark:text-gray-lightest"
              crossOrigin=""
              color="purple"
            />
            <Input
              id="birthday"
              label="Date de naissance"
              type="date"
              name="date_naissance"
              variant="outlined"
              value={candidateInfo.date_naissance.toLocaleDateString('en-CA', {year: 'numeric',month: '2-digit',day: '2-digit'}) || ''}
              onChange={(event) => handleChange(event)}
              className="dark:bg-gray-dark dark:text-gray-lightest"
              crossOrigin=""
              color="purple"
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
