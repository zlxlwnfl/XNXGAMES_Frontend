import React from "react";

// @mui/material components
// import { Theme, makeStyles } from "@mui/material/styles";
import useClasses from "../../hooks/useClasses";
import Grid from "@mui/material/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};



export default function GridContainer(props: any) {
  const classes = useClasses(styles);
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={(classes as any).grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ""
};
