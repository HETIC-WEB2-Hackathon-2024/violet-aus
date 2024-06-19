import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { authenticatedGet } from "../auth/helper";
import {
  Button,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  CardBody,
} from "@material-tailwind/react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface KpiCardPropsType {
  title: string;
  percentage: string;
  price: string;
  color: string;
  icon: React.ReactNode;
}

export function KpiCard({
  title,
  percentage,
  price,
  color,
  icon,
}: KpiCardPropsType) {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between items-center">
          <Typography
            className="!font-medium !text-xs text-gray-600"
          >
            {title}
          </Typography>
          <div className="flex items-center gap-1">
            {icon}
            <Typography
              color={color as any}
                className="font-medium !text-xs"
            >
              {percentage}
            </Typography>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="mt-1 font-bold text-2xl"
        >
          {price}
        </Typography>
      </CardBody>
    </Card>
  );
}


const Dashboard = () =>  {
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<KpiCardPropsType[]>([]);
  const [error, setError] = useState<string | null>(null);

  

  useEffect(() => {
    const callApis = async () =>{
      try {
        const token = await getAccessTokenSilently();
        
        // First API Call
        const countOffer = await authenticatedGet(token, "/api/private/dashboard/countoffer/");
        console.log(countOffer)

        const count:KpiCardPropsType ={
          title: "Event Count",
          percentage: "10%",
          price: `${countOffer.count}`,
          color: "red",
          icon: (
            <ChevronDownIcon
              strokeWidth={4}
              className="w-3 h-3 text-red-500"
            />
          ),
        };
        
        // Combine results if necessary
        setData(old => [ ...old, count]);
      } catch (error: any) {
        setError(`Error from web service: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    
    callApis();
  }, [getAccessTokenSilently]);



  return (
    <section className="container mx-auto py-20 px-8">
      <div className="flex justify-between md:items-center">
        <div>
          <Typography className="font-bold">Overall Performance</Typography>
          <Typography
            variant="small"
            className="font-normal text-gray-600 md:w-full w-4/5"
          >
            Upward arrow indicating an increase in revenue compared to the
            previous period.
          </Typography>
        </div>
        <div className="shrink-0">
          <Menu>
            <MenuHandler>
              <Button
                color="gray"
                variant="outlined"
                className="flex items-center gap-1 !border-gray-300"
              >
                last 24h
                <ChevronDownIcon
                  strokeWidth={4}
                  className="w-3 h-3 text-gray-900"
                />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>last 12h</MenuItem>
              <MenuItem>last 10h</MenuItem>
              <MenuItem>last 24h</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center md:gap-2.5 gap-4">
        {data.map((props, key) => (
          <KpiCard key={key} {...(props as any)} />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;