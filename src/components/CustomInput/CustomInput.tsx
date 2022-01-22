import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import useClasses from "../../hooks/useClasses";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

import styles from "../../assets/jss/material-kit-react/components/customInputStyle";



export default function CustomInput(props: any) {
  const classes = useClasses(styles);
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;

  const labelClasses = classNames({
    [" " + (classes as any).labelRootError]: error,
    [" " + (classes as any).labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [(classes as any).underlineError]: error,
    [(classes as any).underlineSuccess]: success && !error,
    [(classes as any).underline]: true,
    [(classes as any).whiteUnderline]: white
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = classNames({
    [(classes as any).input]: true,
    [(classes as any).whiteInput]: white
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      (classes as any).formControl
    );
  } else {
    formControlClasses = (classes as any).formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={(classes as any).labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: (classes as any).disabled,
          underline: underlineClasses
        }}
        id={id}
        {...inputProps}
      />
    </FormControl>
  );
}
