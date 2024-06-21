import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { authenticatedGet } from "../auth/helper";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkIcon from "@mui/icons-material/Work";
import Carte from "../components/Carte";

interface KpiCardPropsType {
  title: string;
  price: string;
  icon: React.ReactNode;
}

export function KpiCard({ title, price, icon }: KpiCardPropsType) {
  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg">
      <CardBody className="p-4">
        <div className="flex justify-between items-center">
          <Typography className="!font-medium !text-xs text-gray-600 d">
            {icon} {title}
          </Typography>
        </div>
        <Typography color="blue-gray" className="mt-1 font-bold text-2xl">
          {price}
        </Typography>
      </CardBody>
    </Card>
  );
}

const Dashboard = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Object>({});
  const [numbers, setNumbers] = useState<KpiCardPropsType[]>([]);
  const [error, setError] = useState<string | null>(null);

  data == true;
  loading == true;
  error == "";

  useEffect(() => {
    const callApis = async () => {
      try {
        const token = await getAccessTokenSilently();
        const fetchData = await authenticatedGet(
          token,
          "/api/private/dashboard/"
        ); // Generic api for acces to all datas

        // Save the datas
        setData((old) => ({ ...old, ...fetchData }));

        // Custom kpi props with or data
        const KpiCardInfos: KpiCardPropsType[] = [
          {
            title: "Nombre d'offres",
            price: `${fetchData.infos.allOffer}`,
            icon: <TrendingUpIcon strokeWidth={4} className="w-3 h-3" />,
          },
          {
            title: "Nombre d'offres",
            price: `${fetchData.infos.offerByJob}`,
            icon: <WorkIcon strokeWidth={4} className="w-3 h-3" />,
          },
          {
            title: "Entreprise participante",
            price: `${fetchData.infos.nbrEntreprise}`,
            icon: (
              <WorkIcon
                strokeWidth={4}
                className="w-3 h-3"
              />
            ),
          },
          {
            title: "placholder",
            price: `Fake data`,
            icon: <WorkIcon strokeWidth={4} className="w-3 h-3" />,
          },
        ];

        setNumbers(KpiCardInfos);
      } catch (error: any) {
        setError(`Error from web service: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    callApis();
  }, [getAccessTokenSilently]);

  return (
    <section className="container mx-auto py-20 px-8">
      <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center md:gap-2.5 gap-4">
        {numbers.map((props, key) => (
          <KpiCard key={key} {...(props as any)} />
        ))}
      </div>
      <Carte />
    </section>
  );
};

export default Dashboard;
