import SearchBar from "../components/SearchBar";
import { ButtonDefault } from "../components/ButtonDefault";
import { SimpleCard } from "../components/SimpleCard";
import { useEffect, useState } from "react";

export default function OffersPage() {
  const [offers, setOffers] = useState();

  useEffect(() => {
    async function getOffers() {
      try {
        const offers = await fetch("https://localhost:3000/");
      } catch (error) {
        console.error(`$error`);
      }
    }
  });
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
