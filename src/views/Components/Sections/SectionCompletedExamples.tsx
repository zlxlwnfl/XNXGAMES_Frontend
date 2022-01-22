import React from "react";
// @mui/material components
import useClasses from "../../../hooks/useClasses";
// @mui/icons-material

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/completedStyle";



export default function SectionCompletedExamples() {
  const classes = useClasses(styles);
  return (
    <div className={(classes as any).section}>
      <div className={(classes as any).container}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Completed with examples</h2>
            <h4>
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you{"'"}re good to
              go. More importantly, looking at them will give you a picture of
              what you can build with this powerful kit.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
