import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Authenticated } from "./auth/Authenticated.tsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="adopte-un-stagiaire.eu.auth0.com"
      clientId="R5nkYZygAqAtORqxqqpUPf03vuBAO7Xt"
      authorizationParams={{
        audience: "api.aus.floless.fr",
        redirect_uri: window.location.origin,
      }}
    >
      <Authenticated>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Authenticated>
    </Auth0Provider>
  </React.StrictMode>
);
