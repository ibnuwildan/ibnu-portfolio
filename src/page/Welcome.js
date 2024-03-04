import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { TextField } from "@mui/material";
import Swal from 'sweetalert2'

const WelcomePage = () => {
    const [nama, setNama] =  useState('')
    const navigate = useNavigate();
    const whiteText = { color: 'white' };

    const handleClick = ()=> {
        if(nama.trim() !== "") {
            navigate(`/about`, { state: { nama } });
        }else{
            Swal.fire({
                icon: "error",
                title: "Please Input Your Name"
              });
        }
    }

    return(
    <div>
        <div className="banner">
          <div className="text-benner text-white">
                <TypeAnimation
                sequence={[
                    'Hallo, My Name Is Ibnu Wildan ',
                    1000, // Delay sebelum menambah kalimat baru (dalam milidetik)
                    'I am a Front End Developer.',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '3em', display: 'inline-block', fontFamily: "monospace", textAlign: "center" }}
                />  
         </div>
                <Container className="text-center d-flex flex-column align-items-center justify-content-center">
                <Form onSubmit={handleClick}>
                <TextField 
                className="txtfld" 
                id="filled-basic" 
                label="Please input your name" 
                variant="standard"   
                size="small" 
                onChange={(e) => setNama(e.target.value)}
                InputLabelProps={{ style: whiteText }}
                InputProps={{ style: whiteText }}/>
                </Form>
                
                <Button className="btn-welcome mt-3" size="sm" variant="outline-secondary"onClick={handleClick}>visit my portfolio</Button>
                </Container>
        </div>
    </div>
    )
}

export default WelcomePage