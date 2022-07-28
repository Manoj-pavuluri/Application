import React from 'react';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Header.css'
import { useKeycloak } from "@react-keycloak/web";

const Header = () => {
    const { keycloak, initialized } = useKeycloak();
    return (
        <div className='parent'>
            <nav class="navbar navbar-expand-lg navbar-light HeaderBg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT55Cmp281VRFqE6Mn6l0aBLBsQC81a2AujHQ&usqp=CAU" className="HeaderImage"/></a>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <form class="d-flex formSearch">
                            <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-success SearchButton" type="submit">Search</button>
                        </form>
                    </div>
                    {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Manoj Kumar
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>

                    </ul> */}
                    {!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </button>
                 )}
                 {!!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.logout()}
                   >
                     Logout ({keycloak.tokenParsed.preferred_username})
                   </button>
                 )}
                </div>
            </nav>
            <SideBar />
            <Footer />
        </div>
    )
}

export default Header;