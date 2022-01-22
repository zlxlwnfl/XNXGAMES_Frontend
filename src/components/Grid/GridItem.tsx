import React from "react";
// @mui/material components
// import { Theme, makeStyles } from "@mui/material/styles";
import useClasses from "../../hooks/useClasses";
import Grid from "@mui/material/Grid";

const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};



export default function GridItem(props: any) {
  const classes = useClasses(styles);
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={(classes as any).grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ""
};
