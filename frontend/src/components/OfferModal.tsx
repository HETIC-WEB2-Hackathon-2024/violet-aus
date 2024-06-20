import { authenticatedGet } from "../auth/helper";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

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
  const [open, setOpen] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const [offer, setOffer] = useState();

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
  }, []);

  return offer ? (
    <>
      <Button onClick={handleOpen} className="bg-primary-base_dark bg-none">
        Voir Plus
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
        <DialogFooter className="space-x-2">
          <Button
            className="bg-primary-base_dark bg-none"
            variant="gradient"
            // color="purple"
            onClick={() => console.log("ui")}
          >
            J'ai candidaté
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  ) : (
    <></>
  );
}
