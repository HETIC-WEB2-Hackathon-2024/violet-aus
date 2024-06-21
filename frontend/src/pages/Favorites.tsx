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
      <div className="bg-gray-lightest dark:bg-gray-darkest border border-primary-light_white dark:border-primary-light_dark w-full p-4 rounded-lg">
        <Typography
          variant="h4"
          className="text-primary-lightest text-center font-bold"
        >
          MA SÉLECTION
        </Typography>
      </div>
      <div className="flex flex-wrap gap-5">
        {offers?.map((offer: Offres, index) => (
          <div
            key={index}
            className="bg-gray-lightest dark:bg-gray-darkest border border-primary-light_white dark:border-primary-light_dark w-full p-4 rounded-lg"
          >
            <Typography
              variant="h5"
              className="text-gray-darkest dark:text-gray-lightest mb-2"
            >
              {offer.titre_emploi}
            </Typography>
            <Typography className="text-gray-darkest dark:text-gray-lightest mb-2">
              {offer.entreprise}
            </Typography>
            <Typography className="text-gray-darkest dark:text-gray-lightest mb-2">
              {offer.lieu}
            </Typography>
            <Typography className="text-gray-darkest dark:text-gray-lightest mb-2">
              {offer.contrat}
            </Typography>
            <Typography className="text-gray-darkest dark:text-gray-lightest mb-4">
              {offer.description_courte}
            </Typography>
            <Button
              onClick={() => RemoveFavorite(offer.id)}
              className="bg-transparent shadow-none hover:shadow-none flex items-center gap-3 p-2"
            >
              <img src="/star_filled.svg" alt="Logo" className="w-6" />
              <Typography className="text-gray-darkest dark:text-gray-lightest font-normal">
                Retirer
              </Typography>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
