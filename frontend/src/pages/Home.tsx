import { useAuth0 } from "@auth0/auth0-react";
import { Button, ListItemPrefix, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface Offres {
  id: number;
  titre_emploi?: string;
  entreprise?: string;
  lieu?: string;
  contrat?: string;
  description_courte?: string;
}
const Home = () => {
  const [offers, setOffers] = useState<Offres[] | []>([]);

  useEffect(() => {
    const callApis = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/public/offre");
        const data = await response.json();
        setOffers(data.offres);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    callApis();
  }, []);

  return (
    <>
      <div className="bg-primary-light_white dark:bg-primary-light_dark p-4 text-center text-h4 font-bold rounded-lg mb-4">
        <h4 className="text-gray-lightest">
          Explorez les meilleures offres de stage
        </h4>
      </div>
      <div className="flex flex-row gap-2 flex-wrap">
        {offers?.map((offer: Offres, index) => (
          <div key={index} className="border border-black">
            <p className="text-gray-darkest dark:text-gray-lightest">
              {offer.titre_emploi}
            </p>
            <p className="text-gray-darkest dark:text-gray-lightest">
              {offer.entreprise}
            </p>
            <p className="text-gray-darkest dark:text-gray-lightest">
              {offer.lieu}
            </p>
            <p className="text-gray-darkest dark:text-gray-lightest">
              {offer.contrat}
            </p>
            <p className="text-gray-darkest dark:text-gray-lightest">
              {offer.description_courte}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
