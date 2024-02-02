import  {React, useState} from "react";
import { Container } from "react-bootstrap";
import CardProject from "../component/Cardproject"
import ModalContent from "../component/Modals"
import NavbarComponent from "../component/Navbar";

const ProjectPage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
        <NavbarComponent />
        <div className="justify-content-center align-items-center" style={{minHeight: "100vh"}}>
            <div className="bg-secondary" style={{margin: "5%", borderRadius: "10px"}}>
          <Container>
          <div className="project justify-content-center d-flex flex-wrap py-5">
         <CardProject img1={require("../img/cloting.jpg")} title="Oddi Design" text="Company Profile Website Fashion" button="show" to="/project1"/>
         <CardProject img1={require("../img/movie_time.jpg")} title="Find Movie" text="Film Search Website" button="show" to="/project2"/>
         <CardProject img1={require("../img/body1.jpg")} title="Furniture" text="Furniture Website" button="show" to="/project3"/>
         <CardProject img1={require("../img/food.jpg")} title="Food" text="Company Profile website Food" button="show" to="/project4"/>
          </div>
        </Container>
        <ModalContent text="hallo" show={showModal} setShow={setShowModal} />
            </div>
        </div>
        </div>
    )
}

export default ProjectPage