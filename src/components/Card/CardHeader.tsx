import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import useClasses from "../../hooks/useClasses";
// @mui/icons-material

// core components
import styles from "../../assets/jss/material-kit-react/components/cardHeaderStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];



export default function CardHeader(props: any) {
  const classes = useClasses(styles);
  const { className, children, color, plain, ...rest } = props;
  const cardHeaderClasses = classNames({
    [(classes as any).cardHeader]: true,
    [getKeyValue(classes as any)((color + "CardHeader") as (keyof typeof styles))]: color,
    [(classes as any).cardHeaderPlain]: plain,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}
