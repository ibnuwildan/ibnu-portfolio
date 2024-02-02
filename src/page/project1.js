import React from "react";
import {Navbar ,Nav, Card, CardTitle } from 'react-bootstrap';
import CarouselContent from "../component/Carousel";
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const ProjectSatu = ()=> {
    return(
        <div className="vh-100">
           <Navbar bg="dark" data-bs-theme="dark">
          <Nav className="me-auto ps-5">
            <Nav.Link href="/project"><Button variant="secondary" size="sm">Back</Button></Nav.Link>
          </Nav>
      </Navbar>

        <div className="d-flex justify-content-center d-flex flex-wrap" style={{marginTop: "8%"}}>
        <Card className="bg-ligth" style={{ width: '70%' }}>
            <div className="row">
                <div className="col-md-6">
                <CarouselContent img1={require("../img/oddi1.PNG")} img2={require("../img/oddi2.PNG")} img3={require("../img/oddi3.PNG")}/>
                </div>
                <div className="col-md-6">
        <Card.Body className="" style={{paddingTop: "50px"}}>
        <CardTitle className="pb-3">Project Info</CardTitle>
        <Card.Text>
          <span className="fw-bold">Project Name : </span>Oddi Design 
        </Card.Text>
        <Card.Text>
          <span className="fw-bold">Description : </span>this website about company profile fashion, focus on tsirt promotion and custom tsirt 
        </Card.Text>
        <Card.Text>
        <span className="fw-bold">Build With : </span>Reactjs, Bootstrap.
        </Card.Text>
        <Card.Text>
        <span className="fw-bold">Year : </span>2022
        </Card.Text>
        <Button className="me-3" variant="outlined" startIcon={<GitHubIcon />}  size="small" href="https://github.com/ibnuwildan/oddi-project">
        Github
      </Button>
        <Button variant="contained" startIcon={<LanguageIcon />}  size="small" href="https://oddidesign.com/">
        Demo
      </Button>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
                </div>
            </div>
   
    
    </Card>
        </div>
        </div>
    )
}

export default ProjectSatu