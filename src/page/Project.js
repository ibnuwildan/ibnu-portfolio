import  {React} from "react";
import CardProject from "../component/Cardproject"
import NavbarComponent from "../component/Navbar";

const ProjectPage = () => {

    return (
        <div className="pb-5">
        <NavbarComponent />
        <div className="justify-content-center align-items-center" style={{minHeight: "100vh"}}>
            <div className="bg-secondary" style={{margin: "5%", borderRadius: "10px"}}>
          <div className="project justify-content-center d-flex flex-wrap py-5">
         <CardProject img1={require("../img/cloting.jpg")} title="Oddi Design" text="Company Profile Website Fashion" button="show" to="/project1"/>
         <CardProject img1={require("../img/movie_time.jpg")} title="Movie Time" text="Film Search Website" button="show" to="/project2"/>
         <CardProject img1={require("../img/body1.jpg")} title="Furniture" text="Furniture Website" button="show" to="/project3"/>
         <CardProject img1={require("../img/icon-finance.jpg")} title="Oddi Finance" text="financial management" button="show" to="/project4"/>
         <CardProject img1={require("../img/logo-clinic.jpeg")} title="Healty Clinic " text="Outpatient System Services" button="show" to="/project5"/>
          </div>
            </div>
        </div>
        </div>
    )
}

export default ProjectPage