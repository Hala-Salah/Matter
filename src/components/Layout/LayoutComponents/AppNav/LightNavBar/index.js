import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./styles.module.css";
import LeftSection from "./LetSection";
import Nav from "react-bootstrap/Nav";
import MiddleSection from "./MiddleSection";
import React from "react";
import IconsSection from "./IconsSection";
import { Link} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useCookies } from 'react-cookie'
import UserProfile from "../../../../HomePage/UserProfile";

function LightNavBar() {
  const[cookie , setCookie , removeToken]=useCookies();
  
  const logOut=()=>{
    localStorage.removeItem("token");
    removeToken("token") ;}
  
  return (
    <>
      <Navbar expand="lg" className={styles.LightNavBar}>
        <Container>
          <LeftSection />
          <IconsSection />
          <Navbar.Toggle />
          <Navbar.Collapse>
            <hr className={styles.navBarHr} />
            <MiddleSection />
            <Nav>
            {"token" in cookie ?
            <NavDropdown title={<UserProfile/>}>
              <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>
            </NavDropdown> 
             :<Link to="/Login" className={styles.loginLink}>
                LOGIN
              </Link>
      }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default LightNavBar;
