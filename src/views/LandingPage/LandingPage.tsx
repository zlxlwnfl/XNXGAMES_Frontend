import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
// import useClasses from "../../hooks/useClasses";
import useClasses from "../../hooks/useClasses";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/CustomButtons/Button";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";

import styles from "../../assets/jss/material-kit-react/views/landingPage";

// Sections for this page
import ProductSection from "./Sections/ProductSection";
import TeamSection from "./Sections/TeamSection";
import WorkSection from "./Sections/WorkSection";

const dashboardRoutes: any = [];

// 

export default function LandingPage(props: any) {
  const classes = useClasses(styles);
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../../assets/img/landing-bg.jpg")}>
        <div className={(classes as any).container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={(classes as any).title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames((classes as any).main, (classes as any).mainRaised)}>
        <div className={(classes as any).container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
