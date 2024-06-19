import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface SimpleCardProps {
  title?: string;
  enterprise?: string;
  place?: string;
  contract?: string;
}

export function SimpleCard({
  title,
  enterprise,
  place,
  contract,
}: SimpleCardProps) {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{enterprise}</Typography>
        <Typography>{place}</Typography>
        <Typography>{contract}</Typography>
      </CardBody>
      {/* <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter> */}
    </Card>
  );
}
