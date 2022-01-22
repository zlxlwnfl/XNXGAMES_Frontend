import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import useClasses from "../../../hooks/useClasses";

// @mui/icons-material

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle";

import team1 from "../../../assets/img/faces/avatar.jpg";
import team2 from "../../../assets/img/faces/christian.jpg";
import team3 from "../../../assets/img/faces/kendall.jpg";



export default function TeamSection() {
  const classes = useClasses(styles);
  const imageClasses = classNames(
    (classes as any).imgRaised,
    (classes as any).imgRoundedCircle,
    (classes as any).imgFluid
  );
  return (
    <div className={(classes as any).section}>
      <h2 className={(classes as any).title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={(classes as any).itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={(classes as any).cardTitle}>
                Gigi Hadid
                <br />
                <small className={(classes as any).smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={(classes as any).description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={(classes as any).justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={(classes as any).margin5}
                >
                  <i className={(classes as any).socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={(classes as any).margin5}
                >
                  <i className={(classes as any).socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={(classes as any).margin5}
                >
                  <i className={(classes as any).socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={(classes as any).itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={(classes as any).cardTitle}>
                Christian Louboutin
                <br />
                <small className={(classes as any).smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={(classes as any).description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={(classes as any).justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={(classes as any).margin5}
                >
                  <i className={(classes as any).socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={(classes as any).margin5}
                >
                  <i className={(classes as any).socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={(classes as any).itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={(classes as any).cardTitle}>
                Kendall Jenner
                <br />
                <small className={(classes as any).smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={(classes as any).description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={(classes as any).justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={(classes as any).margin5}
                >
                  <i className={(classes as any).socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={(classes as any).margin5}
                >
                  <i className={(classes as any).socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={(classes as any).margin5}
                >
                  <i className={(classes as any).socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
