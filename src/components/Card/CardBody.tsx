import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import useClasses from "../../hooks/useClasses";
// @mui/icons-material

// core components
import styles from "../../assets/jss/material-kit-react/components/cardBodyStyle";



export default function CardBody(props: any) {
  const classes = useClasses(styles);
  const { className, children, ...rest } = props;
  const cardBodyClasses = classNames({
    [(classes as any).cardBody]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}
