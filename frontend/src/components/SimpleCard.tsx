import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { OfferModal } from "./OfferModal";

interface SimpleCardProps {
  title?: string;
  enterprise?: string;
  location?: string;
  contract?: string;
  id: number;
}

export function SimpleCard({
  title,
  enterprise,
  location,
  contract,
  id,
}: SimpleCardProps) {
  return (
    <Card className="mt-6 w-96" id={`offer-${id.toString()}`}>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{enterprise}</Typography>
        <Typography>{location}</Typography>
        <Typography>{contract}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <OfferModal idOffer={id} location={location} />
      </CardFooter>
    </Card>
  );
}
