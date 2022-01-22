import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @mui/material components
// import makeStyles from "@mui/material/styles/makeStyles";
import useClasses from "../../hooks/useClasses";
import Button from "@mui/material/Button";

// core components

import buttonStyle from "../../assets/jss/material-kit-react/components/buttonStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

// const makeComponentStyles = useClasses(() => ({
//   ...buttonStyle
// }));

const RegularButton = React.forwardRef((props: any, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = useClasses(buttonStyle);

  const btnClasses = classNames({
    [(classes as any).button]: true,
    [getKeyValue(classes as any)(size)]: size,
    [getKeyValue(classes as any)(color)]: color,
    [(classes as any).round]: round,
    [(classes as any).fullWidth]: fullWidth,
    [(classes as any).disabled]: disabled,
    [(classes as any).simple]: simple,
    [(classes as any).block]: block,
    [(classes as any).link]: link,
    [(classes as any).justIcon]: justIcon,
    [className]: className
  });
  return (
    <Button {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});

RegularButton.displayName = 'RegularButton';

export default RegularButton;
