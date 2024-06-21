import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { authenticatedGet } from "../auth/helper";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkIcon from "@mui/icons-material/Work";
import Carte from "../components/Carte";
import { SimpleCard } from "../components/SimpleCard";

interface KpiCardPropsType {
  title: string;
  price: string;
  icon: React.ReactNode;
}

interface LastOfferItem {
  titre_emploi: string;
  entreprise: string;
  contrat: string;
  lieu: string;
  id: number;
}

export function KpiCard({ title, price, icon }: KpiCardPropsType) {
  return (
    <Card className="shadow-sm border border-primary-light_white dark:border-primary-light_dark !rounded-lg mb-4">
      <CardBody className="p-4 bg-gray-lightest dark:bg-gray-darkest !rounded-lg flex justify-between">
        <div>
          <Typography className="!font-medium !text-xs text-gray-darkest dark:text-gray-lightest">
            {icon} {title}
          </Typography>
        </div>
        <Typography
          color="blue-gray"
          className="mt-1 font-bold text-2xl text-gray-darkest dark:text-gray-lightest"
        >
          {price}
        </Typography>
      </CardBody>
    </Card>
  );
}

const Dashboard = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
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
        setData(fetchData.infos);

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
      <div className="mt-6 grid grid-cols-[auto_auto_auto] items-center md:gap-2.5 gap-4">
        {numbers.map((props, key) => (
          <KpiCard key={key} {...(props as any)} />
        ))}
      </div>
      <Carte />

      <div className={"grid grid-cols-3 gap-12"}>
        {data?.lastOffer?.map((lastOfferItem: LastOfferItem, index: number) => (
          <SimpleCard
            key={index}
            title={lastOfferItem.titre_emploi}
            enterprise={lastOfferItem.entreprise}
            contract={lastOfferItem.contrat}
            location={lastOfferItem.lieu}
            id={lastOfferItem.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
