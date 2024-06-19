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
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function SimpleCard({
  title,
  enterprise,
  place,
  contract,
  onClick,
}: SimpleCardProps) {
  return (
    <Card className="mt-6 w-96" onClick={(event) => onClick(event)}>
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
