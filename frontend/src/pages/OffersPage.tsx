import SearchBar from "../components/SearchBar";
import { ButtonDefault } from "../components/ButtonDefault";
import { SimpleCard } from "../components/SimpleCard";
import { useEffect, useState } from "react";
import { authenticatedGet } from "../auth/helper";
import { useAuth0 } from "@auth0/auth0-react";
import { Localist } from "../components/Localist";
import { list } from "@material-tailwind/react";

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
      const token = await getAccessTokenSilently();
      const response = await authenticatedGet(
        token,
        `/api/private/offre/?titre_emploi=${encodeURIComponent(
          formData.title
        )}&region=${encodeURIComponent(formData.place)}`
      );

      // const data = await response.json();
      console.log(response);
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

          <Localist
            className={"h-full outline-none px-4 border-r-2"}
            list={"department"}
            name={"department-choice"}
            type={"text"}
            placeholder={"Département"}
          />

          {/* <div>
            <input
              className="h-full outline-none px-4 border-r-2"
              list="department"
              type="text"
              name="department-choice"
              id="department-choice"
            />

            <datalist id="department">
              {offers?.map((offer, index) => (
                <option key={index} value={offer["lieu"]}>
                  {offer["region"]}
                </option>
              ))}
            </datalist>
          </div> */}
          {/* <SearchBar
            name="place"
            placeholder="Entrez la localisation..."
            className="w-60 h-12 outline-none px-4 border-r-2"
            onChange={(event) => inputTyping(event)}
          /> */}
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
            place={offer["region"]}
            onClick={() => test()}
          />
        ))}
      </div>
    </div>
  );
}
