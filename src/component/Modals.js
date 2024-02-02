import React from "react"
import { Modal } from "react-bootstrap"
import CarouselContent from "./Carousel";

const ModalContent = (props) => {

    const { show, setShow } = props;

    return (
        <div>
        <Modal
        show={show}
        size="xl"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-md-7">
              <CarouselContent img1={require("../img/cover.jpg")} img2={require("../img/cover.jpg")} img3={require("../img/cover.jpg")} />
              </div>
              <div className="col-md-5">
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        </div>
    )
}

export default ModalContent;