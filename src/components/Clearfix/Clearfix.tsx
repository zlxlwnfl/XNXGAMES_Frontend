import React from "react";

// mterial-ui components
// import { Theme, makeStyles } from "@mui/material/styles";
import useClasses from "../../hooks/useClasses";

const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};



export default function Clearfix() {
  const classes = useClasses(styles);
  return <div className={(classes as any).clearfix} />;
}
