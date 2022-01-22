import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import useClasses from "../../hooks/useClasses";
// @mui/icons-material

// core components
import styles from "../../assets/jss/material-kit-react/components/cardStyle";



export default function Card(props: any) {
  const classes = useClasses(styles);
  const { className, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    [(classes as any).card]: true,
    [(classes as any).cardPlain]: plain,
    [(classes as any).cardCarousel]: carousel,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}