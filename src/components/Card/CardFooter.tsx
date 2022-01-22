import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import useClasses from "../../hooks/useClasses";
// @mui/icons-material

// core components
import styles from "../../assets/jss/material-kit-react/components/cardFooterStyle";



export default function CardFooter(props: any) {
  const classes = useClasses(styles);
  const { className, children, ...rest } = props;
  const cardFooterClasses = classNames({
    [(classes as any).cardFooter]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

