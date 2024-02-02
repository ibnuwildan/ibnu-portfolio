import React from "react";
import { Card } from "react-bootstrap";


const CardConntent = (prop) => {
    return (
        <Card className="card-service mx-5 my-2 bg-dark text-light" style={{ width: '21rem', height: "19em", textAlign:"justify" }}>
        <Card.Body className="px-5">
          <Card.Title className="pt-4"><h2>{prop.title}</h2></Card.Title>
          <Card.Subtitle className="mb-2 fs-4 pt-3">{prop.subtitle}</Card.Subtitle>
          <Card.Text>
            {prop.text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardConntent