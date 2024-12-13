import React, { useEffect, useState }  from "react";
import {  Image, ButtonGroup, Button } from "react-bootstrap";
import NavbarComponent from "../component/Navbar";
import { useLocation } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HomePage = () => {

  const location = useLocation();
  const storedNama = localStorage.getItem('nama');
  const [nama] = useState(location.state?.nama || storedNama || '');

  useEffect(() => {
    // Panggil openCity pada saat komponen dimuat untuk menampilkan konten awal
    openCity("experiences");
    localStorage.setItem('nama', nama);
  }, [nama]);

  function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
  }
  

    return (
    <div className="pb-5"  style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <NavbarComponent />
      <div className="justify-content-center align-items-center">
      <p className="text-welcome text-center text-white pt-5  "> Hallo {nama}, thank you for visiting my portfolio </p>
            <div className="row-welcome row justify-content-center bg-secondary py-5" style={{margin: "50px", borderRadius: "10px"}}>
              <div className="col-md-4 text-center pt-5">
              <Image  src={require('../img/inu.jpg')} rounded  style={{width: "70%"}}/> <br/>
              <Button className="btn-contact" variant="secondary" type="submit" href="https://wa.me/6285217180396"><WhatsAppIcon /></Button>
              <Button className="btn-contact" variant="secondary" type="submit" href="https://github.com/ibnuwildan?tab=repositories"><GitHubIcon /></Button>
              <Button className="btn-contact" variant="secondary" type="submit" href="https://www.linkedin.com/in/ibnu-wildan-4379aa152/"><LinkedInIcon /></Button>
              <Button className="btn-contact" variant="secondary" type="submit" href="https://www.instagram.com/ibnu_wildan/"><InstagramIcon /></Button><br/>
              <Button className="mt-3" variant="secondary" href={require("../img/experience.pdf")} download >Download My CV</Button>
              </div>
              <div className="text-about col-md-5 py-5 pe-5" style={{textAlign: "justify"}}>
              <h3>About Me</h3>
          <p>I'm a front-end developer and user interface (UI) designer focused on creating visually stunning and intuitive web experiences. With expertise in HTML, CSS, JavaScript, React Js, using front-end frameworks with React. as well as back-end experience in expertise with Node Js, Express Js, Rest API,MYSQL and postman. I make sure that every website I build not only looks great, but also functions smoothly. As a UI designer, I pay attention to every detail in design to create user interfaces that are easy to use and enjoyable for users. I also ensure that every web layout I create follows responsive design and modern design principles to provide the best user experience. With a combination of technical skills and design artistry, I am ready to create engaging and intuitive web experiences for users.</p>
          <div className="centered-container text-center" >
          <ButtonGroup className="btngroup">
           {/* <Button variant="secondary" onClick={() => openCity("skill")}>Skill</Button> */}
           <Button variant="secondary" onClick={() => openCity("experiences")}>Experience</Button>
           <Button variant="secondary" onClick={() => openCity("education")}>Education</Button>
         </ButtonGroup>
          </div>   
          {/* <div id="skill" className="city">
              <ul>
                <li>Javascript</li>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
          </div> */}
         <div id="experiences" className="city">
              <ul>
                <li>systemEngineer & Administrator Learning Management System</li>
                <p>Yayasan Kristen Indoesia (Feb 2021-Currently employed)</p>
              </ul>
              <ul>
                <li>Web Developer</li>
                <p>Purwadhika digital school (Oct 2020- Jan 2021)</p>
              </ul>
              <ul>
                <li>Administrator Customer Care</li>
                <p>Bank Negara Indonesia (Mart 2018 - Sep2020)</p>
              </ul>
              <ul>
                <li>Front End</li>
                <p>PT. Total Bangun Persada (Oct 2017-Jan 2018)</p>
              </ul>
          </div>
         <div id="education" className="city">
              <ul>
                <li>Graduate Of Informatic Engineering, At Gunadarma University</li>
                <li>Purwadhika Digital School</li>
                <li>State Senior High School, 07 South Tangerang </li>
              </ul>
        </div>    
          </div>
            </div>
    
       </div>
    </div>

    
    )
}

export default HomePage