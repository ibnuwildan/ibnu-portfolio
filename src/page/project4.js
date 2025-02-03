import React from "react";
import {Navbar ,Nav, Card, CardTitle } from 'react-bootstrap';
import CarouselContent from "../component/Carousel";
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
// import LanguageIcon from '@mui/icons-material/Language';

const ProjectEmpat = () => {
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
            <CarouselContent img1={require("../img/piduiten-login.PNG")} img2={require("../img/piduiten-dashboard.PNG")} img3={require("../img/input-piduiten.PNG")}/>
            </div>
            <div className="col-md-6">
    <Card.Body className="" style={{paddingTop: "50px"}}>
    <CardTitle>Project Info</CardTitle>
    <Card.Text>
      <span className="fw-bold">Project Name : </span>Oddi Finance
    </Card.Text>
    <Card.Text>
      <span className="fw-bold">Description : </span>OddiFinance is a web application designed as a financial management tool to record and calculate income and expenses.
    </Card.Text>
    <Card.Text>
    <span className="fw-bold">Build With : </span>React.js, Bootstrap, Node.js with Express.js, database Mysql, JWT, Redux
    </Card.Text>
    <Card.Text>
    <span className="fw-bold">Year : </span>2025
    </Card.Text>
    <Button className="me-3" variant="outlined" startIcon={<GitHubIcon />}  size="small" href="https://github.com/ibnuwildan/oddi-finance">
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

export default ProjectEmpat