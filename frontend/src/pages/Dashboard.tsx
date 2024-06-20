import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { authenticatedGet } from "../auth/helper";
// import { Skeleton } from "@mui/material";

const Dashboard = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function callApi() {
      try {
        const token = await getAccessTokenSilently();
        const document = await authenticatedGet(token, "/");
        setData(document);
      } catch (error) {
        setError(`Error from web service: ${error}`);
      } finally {
        setLoading(false);
      }
    }
    callApi();
  }, []);

  let content = <div>Page not found</div>;
  if (loading) {
    content = (
      <Skeleton variant="rounded" animation="wave" width="100%" height="100%" />
    );
  } else {
    content = <div>else</div>;
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      {content}
    </section>
  );
};

export default Dashboard;
