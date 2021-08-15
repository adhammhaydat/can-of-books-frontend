import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Auth0Provider } from '@auth0/auth0-react';

const dome= 'dev-8365axvp.us.auth0.com'
const clint="AokBZMisZIJscU161t1mO895UIT9xH2O"
// TODO: wrap everything in Auth0
ReactDOM.render(
  
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}

    clientId={process.env.REACT_APP_CLIENTID}
    
    redirectUri={window.location.origin}
  > 
  
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);
