# Adopte un stagiaire


# auth

<!-- Configure the Auth0Provider component -->
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="violet-aus.eu.auth0.com"
    clientId="aJ7zv8SnWKNhg3y8NWVNitUPOhdTHg6Q"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

<!-- Add Login to Your Application -->
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

<!-- Add Logout to Your Application -->

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>

    onClick={() =>logout({ logoutParams: { returnTo: window.location.origin } }) }

      Log Out
    </button>
  );
};

export default LogoutButton;

# Problem create offre 
SELECT setval('offre_id_seq', (SELECT MAX(id) FROM public.offre));