import SearchBar from "../components/SearchBar";
import { ButtonDefault } from "../components/ButtonDefault";
import { SimpleCard } from "../components/SimpleCard";
import { useEffect, useState } from "react";
import { authenticatedGet } from "../auth/helper";
import { useAuth0 } from "@auth0/auth0-react";
import { Localist } from "../components/Localist";
import { list } from "@material-tailwind/react";

export default function OffersPage() {
  const [count, setCount] = useState(15);
  const [allOfferArray, setAllOfferArray] = useState([]);
  const { getAccessTokenSilently } = useAuth0();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
  });
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function getOffers() {
      try {
        const token = await getAccessTokenSilently();
        const response = await authenticatedGet(token, "/api/private/offre/");
        const firstArray = response.offres.slice(0, count);
        const firstEntireArray = response.offres;
        setAllOfferArray(firstEntireArray);
        setOffers(firstArray);
        return response;
      } catch (error) {
        console.error(error);
      }
    }

    getOffers();
  }, []);

  function showMore() {
    setCount(() => {
      const newCount = count + 15;
      setOffers(allOfferArray.slice(0, newCount));
      return newCount;
    });
  }

  function inputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function onOffersSearch(event: React.MouseEvent<HTMLButtonElement>) {
    try {
      const token = await getAccessTokenSilently();
      const response = await authenticatedGet(
        token,
        `/api/private/offre/?titre_emploi=${encodeURIComponent(
          formData.title
        )}&region=${encodeURIComponent(formData.location)}`
      );
      setCount(() => {
        const newCount = 15;
        const entireUpdatedArray = response.offres;
        const updatedArray = response.offres.slice(0, newCount);
        setAllOfferArray(entireUpdatedArray);
        setOffers(updatedArray);
        return newCount;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function changePage(event: React.MouseEvent<HTMLButtonElement>) {
    try {
      const token = await getAccessTokenSilently();
      const response = await authenticatedGet(token, `/api/private/offre/`);
    } catch (error) {}
  }

  return (
    <div className={"flex flex-col items-center gap-12"}>
      <div className="flex justify-center my-12">
        <div className="flex border-2 border-primary-base_dark">
          <SearchBar
            name="title"
            placeholder={"Rechercher par job..."}
            className={
              "w-[420px] h-12 outline-none border-primary-base_dark px-4 border-r-2"
            }
            onChange={(event) => inputChange(event)}
          />

          <Localist
            className={"h-full outline-none px-4 border-r-2"}
            list={"department"}
            name={"location"}
            type={"text"}
            placeholder={"Département"}
            onChange={(event) => inputChange(event)}
          />
        </div>

        <ButtonDefault
          className={"w-auto rounded-none bg-primary-base_dark "}
          textContent={"Rechercher..."}
          onClick={(event) => onOffersSearch(event)}
        />
      </div>

      <div className={"grid grid-cols-3 gap-12"}>
        {offers?.map((offer, index) => (
            <SimpleCard
              key={index}
              title={offer["titre_emploi"]}
              enterprise={offer["entreprise"]}
              contract={offer["contrat"]}
              location={offer["region"]}
              id={offer["id"]}
            />
        ))}
      </div>

      <ButtonDefault
        className="w-auto rounded-none bg-primary-base_dark"
        textContent={"Voir plus"}
        onClick={() => showMore()}
      />
    </div>
  );
}
