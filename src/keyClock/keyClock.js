import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    "realm": "keycloak-react-auth",
    "url": "http://localhost:8080/auth/",
    "ssl-required": "external",
    "resource": "react-auth",
    "credentials": {
        "secret": "FjyKwZkUQeWA2CrQUcPOsPKr0OZu7ku1"
    },
    "clientId":"react-auth",
    "confidential-port": 0
});

export default keycloak;