import SearchBar from "../components/SearchBar";
import { ButtonDefault } from "../components/ButtonDefault";
import { SimpleCard } from "../components/SimpleCard";
import { useEffect, useState } from "react";
import { authenticatedGet } from "../auth/helper";
import { useAuth0 } from "@auth0/auth0-react";

interface Offre {
  title: string;
  enterprise: string;
  contract: string;
  place: string;
}

export default function OffersPage() {
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState();

  // useEffect(() => {
  //   async function getOffers() {
  //     try {
  //       const token = await getAccessTokenSilently();
  //       const response = await authenticatedGet(
  //         token,
  //         "http://localhost:3000/api/private/offre/"
  //       );
  //       return response;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   console.log(getOffers());
  // });
  function test() {
    console.log("Yo");
  }

  return (
    <div className={"flex flex-col items-center"}>
      <div className="flex justify-center my-12">
        <div className="flex border-2 border-primary-base">
          <SearchBar
            placeholder={"Rechercher par job..."}
            className={
              "w-[420px] h-12 outline-none border-primary-base px-4 border-r-2"
            }
          />

          <SearchBar
            placeholder="Entrez la localisation..."
            className="w-60 h-12 outline-none px-4 border-r-2"
          />
        </div>

        <ButtonDefault
          className={"w-auto rounded-none bg-primary-base "}
          textContent={"Rechercher..."}
          onClick={() => test()}
        />
      </div>

      <div className={"grid grid-cols-3 gap-12"}>
        <SimpleCard
          title={"Développeur tout en 1 pas cher"}
          enterprise={"Je veux tout sans jamais rien payer"}
          contract={"Stage"}
          place={"Le monde imaginaire"}
        />
        <SimpleCard
          title={"Développeur tout en 1 pas cher"}
          enterprise={"Je veux tout sans jamais rien payer"}
          contract={"Stage"}
          place={"Le monde imaginaire"}
        />
        <SimpleCard
          title={"Développeur tout en 1 pas cher"}
          enterprise={"Je veux tout sans jamais rien payer"}
          contract={"Stage"}
          place={"Le monde imaginaire"}
        />
        <SimpleCard
          title={"Développeur tout en 1 pas cher"}
          enterprise={"Je veux tout sans jamais rien payer"}
          contract={"Stage"}
          place={"Le monde imaginaire"}
        />
        <SimpleCard
          title={"Développeur tout en 1 pas cher"}
          enterprise={"Je veux tout sans jamais rien payer"}
          contract={"Stage"}
          place={"Le monde imaginaire"}
        />
      </div>
    </div>
  );
}
