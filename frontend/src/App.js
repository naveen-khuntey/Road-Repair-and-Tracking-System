import { BrowserRouter } from 'react-router-dom'
import Router from "./component/Router";
import { Auth0Provider } from '@auth0/auth0-react';
function App() {
  return (
      <BrowserRouter>
        <Auth0Provider
          domain='naveen425kal.us.auth0.com'
          clientId='FOB0vJGupHPTZMuDnnRfXfu4PYubs8vZ'
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <Router/>
        </Auth0Provider>
      </BrowserRouter>   
  );
}

export default App;