import React from "react";
import {Navbar ,Nav, Card, CardTitle } from 'react-bootstrap';
import CarouselContent from "../component/Carousel";
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

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
            <CarouselContent img1={require("../img/food1.PNG")} img2={require("../img/food2.PNG")} img3={require("../img/food3.PNG")}/>
            </div>
            <div className="col-md-6">
    <Card.Body className="" style={{paddingTop: "50px"}}>
    <CardTitle>Project Info</CardTitle>
    <Card.Text>
      <span className="fw-bold">Project Name : </span>Food
    </Card.Text>
    <Card.Text>
      <span className="fw-bold">Description : </span>Company Profile webaite about food
    </Card.Text>
    <Card.Text>
    <span className="fw-bold">Build With : </span>HTML, CSS, Bootstrap
    </Card.Text>
    <Card.Text>
    <span className="fw-bold">Year : </span>2022
    </Card.Text>
    <Button className="me-3" variant="outlined" startIcon={<GitHubIcon />}  size="small" href="https://github.com/ibnuwildan/ui-foods">
    Github
  </Button>
    <Button variant="contained" startIcon={<LanguageIcon />}  size="small" href="https://ibnuwildan.github.io/ui-foods/">
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

export default ProjectEmpat