import { authenticatedGet } from "../auth/helper";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

interface OfferModalProps {
  idOffer: number;
  location?: string;
}

export function OfferModal({ idOffer, location }: OfferModalProps) {
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alreadyApplied, setAlreadyApplied] = useState<boolean>(false);

  useEffect(() => {
    const checkAlreadyApplied = () => {
      const applicationList = localStorage.getItem("applicationList");
      const initialAppList: string[] = applicationList
        ? JSON.parse(applicationList)
        : [];

      const isAlreadyApplied = initialAppList.includes(idOffer.toString());

      setAlreadyApplied(isAlreadyApplied);
    };

    checkAlreadyApplied();
  }, [idOffer]);

  const addIdOffer = (id: string) => {
    const applicationList = localStorage.getItem("applicationList");
    const initialAppList: string[] = applicationList
      ? JSON.parse(applicationList)
      : [];
    setAlreadyApplied(true);

    const updatedList = [...initialAppList, id];
    localStorage.setItem("applicationList", JSON.stringify(updatedList));
  };

  const deleteIdOffer = (id: string) => {
    const applicationList = localStorage.getItem("applicationList");
    const initialAppList: string[] = applicationList
      ? JSON.parse(applicationList)
      : [];

    const index = initialAppList.indexOf(id);
    if (index !== -1) {
      initialAppList.splice(index, 1);
      localStorage.setItem("applicationList", JSON.stringify(initialAppList));

      setAlreadyApplied(false);
    }
  };

  const [open, setOpen] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const [offer, setOffer] = useState();
  const [linkedin, setLinkedin] = useState();

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    async function getOffer() {
      try {
        const token = await getAccessTokenSilently();
        const response = await authenticatedGet(
          token,
          `/api/private/offre/${idOffer}`
        );
        const firstArray = response.offre;
        setOffer(firstArray);
      } catch (error) {
        console.error(error);
      }
    }

    getOffer();

    async function getLinkedin() {
      try {
        const token = await getAccessTokenSilently();
        const response = await authenticatedGet(
          token,
          `/api/private/proxy/linkedin/${idOffer}`
        );
        const url = response.url;
        setLinkedin(url);
      } catch (error) {
        console.error(error);
      }
    }

    getLinkedin();
  }, []);

  return offer ? (
    <>
      <Button onClick={handleOpen} className="bg-primary-base_dark bg-none">
        En savoir plus
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="font-bold">
          {offer["titre_emploi"]}
        </DialogHeader>
        <DialogBody className="max-h-[70vh] overflow-scroll space-y-4">
          <Typography className="font-normal font-">
            {offer["entreprise"]}
          </Typography>
          <Typography className="font-normal">{location}</Typography>
          <Typography className="font-normal">{offer["contrat"]}</Typography>
          <Typography className="font-normal">
            {offer["description"]}
          </Typography>
        </DialogBody>
        <DialogFooter className="flex justify-between">
          {linkedin ? (
            <Link
              to={linkedin}
              target="_blank"
              className="flex justify-center content-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </Link>
          ) : (
            ""
          )}
          <Button
            className="bg-primary-base_dark bg-none"
            variant="gradient"
            // color="purple"
            onClick={() => console.log("ui")}
          >
            J'ai candidaté
          </Button>
        </DialogFooter>
        <DialogFooter className="space-x-2">
          {alreadyApplied ? (
            <ProgressBar
              openAlert={openAlert}
              setOpenAlert={setOpenAlert}
              addIdOffer={addIdOffer}
              deleteIdOffer={deleteIdOffer}
              idOffer={idOffer}
              alreadyApplied={alreadyApplied}
            />
          ) : (
            <ProgressBar
              openAlert={openAlert}
              setOpenAlert={setOpenAlert}
              addIdOffer={addIdOffer}
              deleteIdOffer={deleteIdOffer}
              idOffer={idOffer}
              alreadyApplied={alreadyApplied}
            />
          )}
        </DialogFooter>
      </Dialog>
    </>
  ) : (
    <></>
  );
}
