import React from "react";
// @mui/material components
import useClasses from "../../../hooks/useClasses";

// @mui/icons-material

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Small from "../../../components/Typography/Small";
import Danger from "../../../components/Typography/Danger";
import Warning from "../../../components/Typography/Warning";
import Success from "../../../components/Typography/Success";
import Info from "../../../components/Typography/Info";
import Primary from "../../../components/Typography/Primary";
import Muted from "../../../components/Typography/Muted";
import Quote from "../../../components/Typography/Quote";

import image from "../../../assets/img/faces/avatar.jpg";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle";



export default function SectionTypography() {
  const classes = useClasses(styles);
  return (
    <div className={(classes as any).section}>
      <div className={(classes as any).container}>
        <div id="typography">
          <div className={(classes as any).title}>
            <h2>Typography</h2>
          </div>
          <GridContainer>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Header 1</div>
              <h1>The Life of Material Kit</h1>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Header 2</div>
              <h2>The Life of Material Kit</h2>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Header 3</div>
              <h3>The Life of Material Kit</h3>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Header 4</div>
              <h4>The Life of Material Kit</h4>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Header 5</div>
              <h5>The Life of Material Kit</h5>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Header 6</div>
              <h6>The Life of Material Kit</h6>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Header 1</div>
              <h1 className={(classes as any).title}>The Life of Material Kit</h1>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Header 2</div>
              <h2 className={(classes as any).title}>The Life of Material Kit</h2>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Header 3</div>
              <h3 className={(classes as any).title}>The Life of Material Kit</h3>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Header 4</div>
              <h4 className={(classes as any).title}>The Life of Material Kit</h4>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Paragraph</div>
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Quote</div>
              <Quote
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                author=" Kanye West, Musician"
              />
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Muted Text</div>
              <Muted>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Muted>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Primary Text</div>
              <Primary>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Primary>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Info Text</div>
              <Info>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Info>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Success Text</div>
              <Success>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Success>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Warning Text</div>
              <Warning>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Warning>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Danger Text</div>
              <Danger>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Danger>
            </div>
            <div className={(classes as any).typo}>
              <div className={(classes as any).note}>Small Tag</div>
              <h2>
                Header with small subtitle
                <br />
                <Small>Use {'"Small"'} tag for the headers</Small>
              </h2>
            </div>
          </GridContainer>
        </div>
        <div className={(classes as any).space50} />
        <div id="images">
          <div className={(classes as any).title}>
            <h2>Images</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h4>Rounded Image</h4>
              <img
                src={image}
                alt="..."
                className={(classes as any).imgRounded + " " + (classes as any).imgFluid}
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={(classes as any).marginLeft}>
              <h4>Circle Image</h4>
              <img
                src={image}
                alt="..."
                className={(classes as any).imgRoundedCircle + " " + (classes as any).imgFluid}
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={(classes as any).marginLeft}>
              <h4>Rounded Raised</h4>
              <img
                src={image}
                alt="..."
                className={
                  (classes as any).imgRaised +
                  " " +
                  (classes as any).imgRounded +
                  " " +
                  (classes as any).imgFluid
                }
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={(classes as any).marginLeft}>
              <h4>Circle Raised</h4>
              <img
                src={image}
                alt="..."
                className={
                  (classes as any).imgRaised +
                  " " +
                  (classes as any).imgRoundedCircle +
                  " " +
                  (classes as any).imgFluid
                }
              />
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={(classes as any).space50} />
      </div>
    </div>
  );
}
