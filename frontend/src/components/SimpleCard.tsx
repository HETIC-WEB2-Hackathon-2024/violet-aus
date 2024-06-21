import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  ListItemPrefix,
  ListItem,
} from "@material-tailwind/react";
import { OfferModal } from "./OfferModal";

interface SimpleCardProps {
  title?: string;
  enterprise?: string;
  location?: string;
  contract?: string;
  id: number;
}

const icons: { [key: string]: string } = {
  enterprise:
    "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  location:
    "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z",
  contract:
    "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z",
};

export function SimpleCard({
  title,
  enterprise,
  location,
  contract,
  id,
}: SimpleCardProps) {
  const infoData = [
    { icon: icons.enterprise, text: enterprise },
    { icon: icons.location, text: location },
    { icon: icons.contract, text: contract },
  ];

  return (
    <Card className="mt-6 bg-gray-lightest dark:bg-gray-darkest border border-primary-light_white dark:border border-primary-light_dark w-full" id={`offer-${id.toString()}`}>
      <CardBody>
        <Typography variant="h5" className="mb-2 text-gray-darkest dark:text-gray-lightest">
          {title}
        </Typography>
        {infoData.map(
          (item, index) =>
            (
              <ListItem key={index} className="flex items-center">
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-gray-darkest dark:text-gray-lightest"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </ListItemPrefix>
                <Typography className="font-normal text-gray-darkest dark:text-gray-lightest">{item.text}</Typography>
              </ListItem>
            )
        )}
      </CardBody>
      <CardFooter className="pt-0">
        <OfferModal idOffer={id} location={location} />
      </CardFooter>
    </Card>
  );
}
