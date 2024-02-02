import React from "react";
import { Card , Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProject = (prop) => {
    return(
        <Card className="card-project bg-dark mx-2 text-light my-3" style={{ width: '19rem', textAlign:"justify"}}>
        <img src={prop.img1} alt=""/>
          <Card.Body>
            <Card.Title>{prop.title}</Card.Title>
               <Card.Text>
                 {prop.text}
                </Card.Text>
                <div className="text-center">
                <Button className="w-50" size="sm"  variant="outline-light"><Link to={prop.to} style={{textDecoration: "none", color:"grey"}}>show
                </Link></Button>
                </div>
          </Card.Body>
    </Card>
    )
}

export default CardProject