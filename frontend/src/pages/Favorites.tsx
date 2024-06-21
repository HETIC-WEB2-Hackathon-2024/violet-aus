import { useEffect, useState } from "react";
import { authenticatedGet } from "../auth/helper";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@material-tailwind/react";

interface Offres {
  id: number;
  titre_emploi?: string;
  entreprise?: string;
  lieu?: string;
  contrat?: string;
  description_courte?: string;
}

export default function Favorites() {
  const { getAccessTokenSilently } = useAuth0();
  const [offers, setOffers] = useState<Offres[] | []>([]);

  useEffect(() => {
    async function getFavoritesOffers() {
      try {
        const token = await getAccessTokenSilently();
        const result = await authenticatedGet(token, `/api/private/favorites/`);
        setOffers(result.favorites.rows);
        return result;
      } catch (error) {
        console.error(error);
      }
    }

    getFavoritesOffers();
  }, []);

  async function RemoveFavorite(favorite_id: number) {
    try {
      const token = await getAccessTokenSilently();
      const response = await authenticatedGet(
        token,
        `/api/private/favorites/${favorite_id}/`
      );
      setOffers((prevOffers) =>
        prevOffers.filter((offer) => offer.id !== favorite_id)
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-primary-light_white dark:bg-primary-light_dark p-4 text-center text-h4 font-bold rounded-lg">
        <h4 className="text-gray-lightest">MA SÉLECTION</h4>
      </div>
      <div className="flex flex-row gap-2">
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
            <Button
              onClick={() => RemoveFavorite(offer.id)}
              className="bg-transparent soffer.idhadow-none hover:shadow-none flex items-center gap-3 p-2"
            >
              <img src="/star_filled.svg" alt="Logo" className="w-6 " />
              <Typography className="text-gray-darkest dark:text-gray-lightest font-normal normal-case">
                Retirer
              </Typography>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
