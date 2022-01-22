import React from "react";
// @mui/material components
import useClasses from "../../hooks/useClasses";

import styles from "../../assets/jss/material-kit-react/components/badgeStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];
  


export default function Badge(props: any) {
  const classes = useClasses(styles);
  const { color, children } = props;
  return (
    <span className={(classes as any).badge + " " + getKeyValue(classes as any)(color)}>
      {children}
    </span>
  );
}

Badge.defaultProps = {
  color: "gray"
};
