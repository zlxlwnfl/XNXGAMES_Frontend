import React from "react";
// @mui/material components
import useClasses from "../../hooks/useClasses";
// core components
import styles from "../../assets/jss/material-kit-react/components/typographyStyle";



export default function Warning(props: any) {
  const classes = useClasses(styles);
  const { children } = props;
  return (
    <div className={(classes as any).defaultFontStyle + " " + (classes as any).warningText}>
      {children}
    </div>
  );
}
