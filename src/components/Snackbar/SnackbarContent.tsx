import React from "react";
// @mui/material components
import useClasses from "../../hooks/useClasses";
import Snack from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Close from "@mui/icons-material/Close";
// core components

import styles from "../../assets/jss/material-kit-react/components/snackbarContentStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];



const nullJSXElement: any = null;

export default function SnackbarContent(props: any) {
  const { message, color, close, icon } = props;
  const classes = useClasses(styles);
  let action: any = [];
  const closeAlert = () => {
    setAlert(nullJSXElement);
  };
  if (close !== undefined) {
    action = [
      <IconButton
        className={(classes as any).iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={closeAlert}
      >
        <Close className={(classes as any).close} />
      </IconButton>
    ];
  }
  let snackIcon = null;
  switch (typeof icon) {
    case "object":
      snackIcon = <props.icon className={(classes as any).icon} />;
      break;
    case "string":
      snackIcon = <Icon className={(classes as any).icon}>{props.icon}</Icon>;
      break;
    default:
      snackIcon = null;
      break;
  }
  const [alert, setAlert] = React.useState(
    <Snack
      message={
        <div>
          {snackIcon}
          {message}
          {close !== undefined ? action : null}
        </div>
      }
      classes={{
        root: (classes as any).root + " " + getKeyValue(classes as any)(color),
        message: (classes as any).message + " " + (classes as any).container
      }}
    />
  );
  return alert;
}
