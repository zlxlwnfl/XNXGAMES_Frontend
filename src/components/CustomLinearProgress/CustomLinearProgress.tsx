import React from "react";

// @mui/material components
import useClasses from "../../hooks/useClasses";
import LinearProgress from "@mui/material/LinearProgress";
// core components
import styles from "../../assets/jss/material-kit-react/components/customLinearProgressStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];



export default function CustomLinearProgress(props: any) {
  const classes = useClasses(styles);
  const { color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: (classes as any).root + " " + getKeyValue(classes as any)(color + "Background" as (keyof typeof styles)),
        bar: (classes as any).bar + " " + getKeyValue(classes as any)(color)
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: "gray"
};
