import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keyClock/keyClock"
import PrivateRoute from "./helpers/PrivateRoute";
import SideBar from './SideBar/SideBar';
function App() {
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: 'login-required' }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<Header />} />
            <Route exact path="/sidebar" element={<SideBar />} />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>

    </div>
  );
}

export default App;
