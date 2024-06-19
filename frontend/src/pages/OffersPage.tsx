import SearchBar from "../components/SearchBar";
import { ButtonDefault } from "../components/ButtonDefault";
import { SimpleCard } from "../components/SimpleCard";
import { useEffect, useState } from "react";
import { authenticatedGet } from "../auth/helper";
import { useAuth0 } from "@auth0/auth0-react";

interface SearchBarData {
  jobTitle: string;
  jobPlace: string;
}

export default function OffersPage() {
  const { getAccessTokenSilently } = useAuth0();
  const [formData, setFormData] = useState({
    title: "",
    place: "",
  });
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function getOffers() {
      try {
        const token = await getAccessTokenSilently();
        const response = await authenticatedGet(token, "/api/private/offre/");
        // setOffers(response.offres);
        const firstArray = response.offres.slice(0, 15);
        setOffers(firstArray);
        console.log(firstArray);
        return response;
      } catch (error) {
        console.error(error);
      }
    }

    getOffers();
  }, []);

  function inputTyping(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function onClickTest(event: React.MouseEvent<HTMLInputElement>) {
    try {
      const response = await fetch(
        `http://localhost:5173/api/private/offre/?titre_emploi=${encodeURIComponent(
          formData.title
        )}&region=${encodeURIComponent(formData.place)}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function test() {
    console.log("Yo");
  }

  return (
    <div className={"flex flex-col items-center"}>
      <div className="flex justify-center my-12">
        <div className="flex border-2 border-primary-base_dark">
          <SearchBar
            name="title"
            placeholder={"Rechercher par job..."}
            className={
              "w-[420px] h-12 outline-none border-primary-base_dark px-4 border-r-2"
            }
            onChange={(event) => inputTyping(event)}
          />

          <SearchBar
            name="place"
            placeholder="Entrez la localisation..."
            className="w-60 h-12 outline-none px-4 border-r-2"
            onChange={(event) => inputTyping(event)}
          />
        </div>

        <ButtonDefault
          className={"w-auto rounded-none bg-primary-base_dark "}
          textContent={"Rechercher..."}
          onClick={() => onClickTest()}
        />
      </div>

      <div className={"grid grid-cols-3 gap-12"}>
        {offers?.map((offer, index) => (
          <SimpleCard
            key={index}
            title={offer["titre_emploi"]}
            enterprise={offer["entreprise"]}
            contract={offer["contrat"]}
            place={offer["lieu"]}
            onClick={() => test()}
          />
        ))}
      </div>
    </div>
  );
}
