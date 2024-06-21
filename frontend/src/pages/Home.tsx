import { useEffect, useState } from "react";
import { SimpleCard } from "../components/SimpleCard";
import { ButtonDefault } from "../components/ButtonDefault";

interface Offres {
  id: number;
  titre_emploi?: string;
  entreprise?: string;
  region?: string;
  contrat?: string;
}
const Home = () => {
  const [offers, setOffers] = useState<Offres[] | []>([]);
  const [allOffers, setAllOffers] = useState([]);
  const [count, setCount] = useState(15);

  useEffect(() => {
    const callApis = async () => {
      try {
        const response = await fetch("https://api.violet.aus.floless.fr/api/public/offre");
        const data = await response.json();
        const firstArray = data.offres.slice(0, count);
        const firstEntireArray = data.offres;
        setAllOffers(firstEntireArray);
        setOffers(firstArray);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    callApis();
  }, []);

  function showMore() {
    setCount(() => {
      const newCount = count + 15;
      setOffers(allOffers.slice(0, newCount));
      return newCount;
    });
  }

  return (
    <>
      <div className="bg-primary-light_white dark:bg-primary-light_dark p-4 text-center text-h4 font-bold rounded-lg mb-4">
        <h4 className="text-gray-lightest">
          Explorez les meilleures offres de stage
        </h4>
      </div>
      <div className={"flex flex-col items-center gap-12"}>
        <div className={"grid grid-cols-3 gap-12"}>
          {offers?.map((offer, index) => (
            <SimpleCard
              key={index}
              title={offer.titre_emploi}
              enterprise={offer.entreprise}
              contract={offer.contrat}
              location={offer.region}
              id={offer.id}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-2">
        <ButtonDefault
          className="w-auto rounded-none bg-primary-base_dark"
          textContent={"Voir plus"}
          onClick={() => showMore()}
        />
      </div>
    </>
  );
};
export default Home;
