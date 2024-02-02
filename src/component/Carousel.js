import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'antd';

const CarouselContent = (props) => {
    return(
        <div>
      <Carousel className="m-3">
      <Carousel.Item>
        <Image src={props.img1} text="First slide"  alt=""  style={{width:"100%"}}/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={props.img2} text="First slide" alt="" style={{width:"100%"}}/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={props.img3} text="First slide" alt="" style={{width:"100%"}} />
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default CarouselContent