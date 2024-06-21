import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="violet-aus.eu.auth0.com"
    clientId="aJ7zv8SnWKNhg3y8NWVNitUPOhdTHg6Q"
    authorizationParams={{
      audience: "api.violet.aus.floless.fr",
      redirect_uri: window.location.origin + '/manager/dashboard',
    }}
  >
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Auth0Provider>
);
