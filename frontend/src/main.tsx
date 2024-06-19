import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Authenticated } from "./auth/Authenticated.tsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="violet-aus.eu.auth0.com"
    clientId="aJ7zv8SnWKNhg3y8NWVNitUPOhdTHg6Q"
    authorizationParams={{
      audience: "api.violet.aus.floless.fr",
      redirect_uri: window.location.origin,
    }}
  >
    <Authenticated>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Authenticated>
  </Auth0Provider>
);
