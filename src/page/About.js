import React from "react";
import { Container } from "react-bootstrap";
import CardConntent from "../component/Card";
import NavbarComponent from "../component/Navbar";
const AboutPage = ()=> {
    return(
        <div>
          <NavbarComponent />
        <div className="justify-content-center align-items-center" style={{minHeight: "100vh"}}>
        <div className="bg-secondary" style={{margin: "5%", borderRadius: "10px"}}>
          <Container>
            <div className="justify-content-center d-flex flex-wrap py-5">
            <CardConntent title="<>" subtitle="Front End" text="responsible for implementing visual elements that users see and interact with in a web application."/>
            <CardConntent title="<>" subtitle="UI Designer" text="build interfaces in software or computerized devices, focusing on looks or style."/>
            <CardConntent title="<>" subtitle="Web Designer" text="plan, create, and code and web pages."/>
            </div>
          </Container>
        </div>
        </div>
        </div>
  
    )
}

export default AboutPage