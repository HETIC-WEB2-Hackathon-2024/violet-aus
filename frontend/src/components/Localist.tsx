import { useEffect, useState } from "react";
import { authenticatedGet } from "../auth/helper";
import { useAuth0 } from "@auth0/auth0-react";

interface DatalistProps {
  className: string;
  list: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Localist({
  className,
  list,
  name,
  type,
  placeholder,
  onChange,
}: DatalistProps) {
  const { getAccessTokenSilently } = useAuth0();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocations() {
      try {
        const token = await getAccessTokenSilently();
        const response = await authenticatedGet(token, "/api/private/commune/");
        const firstArray = response.communes;
        setLocations(firstArray);
        return response;
      } catch (error) {
        console.error(error);
      }
    }

    getLocations();
  }, []);

  return (
    <div>
      <input
        className={className}
        list={list}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(event) => onChange(event)}
      />

      <datalist id="department">
        {locations?.map((location, index) => (
          <option key={index} value={location["region"]}></option>
        ))}
      </datalist>
    </div>
  );
}
