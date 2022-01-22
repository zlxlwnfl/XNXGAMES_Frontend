import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @mui/material components
import useClasses from "../../../hooks/useClasses";
// @mui/icons-material
import LocationOn from "@mui/icons-material/LocationOn";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";

import image1 from "../../../assets/img/bg.jpg";
import image2 from "../../../assets/img/bg2.jpg";
import image3 from "../../../assets/img/bg3.jpg";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle";



export default function SectionCarousel() {
  const classes = useClasses(styles);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={(classes as any).section}>
      <div className={(classes as any).container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={(classes as any).marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
