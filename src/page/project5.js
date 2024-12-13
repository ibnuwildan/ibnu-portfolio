import React from "react";
import {Navbar ,Nav, Card, CardTitle } from 'react-bootstrap';
import CarouselContent from "../component/Carousel";
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const ProjectLima = () => {
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
            <CarouselContent img1={require("../img/klinik1.PNG")} img2={require("../img/klinik2.png")} img3={require("../img/klinik6.PNG")} img4={require("../img/klinik3.png")}/>
            </div>
            <div className="col-md-6">
    <Card.Body className="" style={{paddingTop: "50px"}}>
    <CardTitle>Project Info</CardTitle>
    <Card.Text>
      <span className="fw-bold">Project Name : </span>Healty Clinic
    </Card.Text>
    <Card.Text>
      <span className="fw-bold">Description : </span>Outpatient system services. starting from registration to getting medicine
    </Card.Text>
    <Card.Text>
    <span className="fw-bold">Build With : </span> React.js, Node.js, Express.js, Mysql, Bootstrap
    </Card.Text>
    <Card.Text>
    <span className="fw-bold">Year : </span>2024
    </Card.Text>
    <Button className="me-3" variant="outlined" startIcon={<GitHubIcon />}  size="small" href="https://github.com/ibnuwildan/healty-clinic">
    Github
  </Button>
    {/* <Button variant="contained" startIcon={<LanguageIcon />}  size="small" href="https://ibnuwildan.github.io/ui-foods/">
    Demo
  </Button> */}
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

export default ProjectLima;