import React from "react";
import {Navbar ,Nav, Card, CardTitle } from 'react-bootstrap';
import CarouselContent from "../component/Carousel";
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
const ProjecTiga = ()=> {
    return(
        <div>
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
                <CarouselContent img1={require("../img/furniture2.png")} img2={require("../img/furniture1.png")} img3={require("../img/furniture3.png")}/>
                </div>
                <div className="col-md-6">
        <Card.Body className="" style={{paddingTop: "80px"}}>
        <CardTitle className="pb-3">Project Info</CardTitle>
        <Card.Text>
          <span className="fw-bold">Project Name : </span>Furniture
        </Card.Text>
        <Card.Text>
          <span className="fw-bold">Description : </span>find your pavorite Furniture, and admin can add products to the website
        </Card.Text>
        <Card.Text>
        <span className="fw-bold">Build With : </span>Reactjs, Nodejs, express.js, Bootstrap, MYSQL.
        </Card.Text>
        <Card.Text>
        <span className="fw-bold">Year : </span>2022
        </Card.Text>
        <Button className="me-3" variant="outlined" startIcon={<GitHubIcon />}  size="small">
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
        </div>
    )
}

export default ProjecTiga