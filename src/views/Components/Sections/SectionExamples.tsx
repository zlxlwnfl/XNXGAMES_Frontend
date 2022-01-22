import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @mui/material components
import useClasses from "../../../hooks/useClasses";
// @mui/icons-material

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";

import landing from "../../../assets/img/landing.jpg";
import profile from "../../../assets/img/profile.jpg";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/exampleStyle";



export default function SectionExamples() {
  const classes = useClasses(styles);
  return (
    <div className={(classes as any).section}>
      <div className={(classes as any).container}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={12} md={6}>
            <Link to="landing-page" className={(classes as any).link}>
              <img
                src={landing}
                alt="..."
                className={
                  (classes as any).imgRaised +
                  " " +
                  (classes as any).imgRounded +
                  " " +
                  (classes as any).imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View landing page
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="profile-page" className={(classes as any).link}>
              <img
                src={profile}
                alt="..."
                className={
                  (classes as any).imgRaised +
                  " " +
                  (classes as any).imgRounded +
                  " " +
                  (classes as any).imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View profile page
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
