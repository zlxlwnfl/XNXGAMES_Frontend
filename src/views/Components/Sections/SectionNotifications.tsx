import React from "react";
// @mui/material components
import useClasses from "../../../hooks/useClasses";
// @mui/icons-material
import Check from "@mui/icons-material/Check";
import Warning from "@mui/icons-material/Warning";
// core components
import SnackbarContent from "../../../components/Snackbar/SnackbarContent";
import Clearfix from "../../../components/Clearfix/Clearfix";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/notificationsStyles";



export default function SectionNotifications() {
  const classes = useClasses(styles);
  return (
    <div className={(classes as any).section} id="notifications">
      <div className={(classes as any).container}>
        <div className={(classes as any).title}>
          <h3>Notifications</h3>
        </div>
      </div>
      <SnackbarContent
        message={
          <span>
            <b>INFO ALERT:</b> You{"'"}ve got some friends nearby, stop looking
            at your phone and find them...
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />
      <SnackbarContent
        message={
          <span>
            <b>SUCCESS ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      <SnackbarContent
        message={
          <span>
            <b>WARNING ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="warning"
        icon={Warning}
      />
      <SnackbarContent
        message={
          <span>
            <b>DANGER ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="danger"
        icon="info_outline"
      />
      <Clearfix />
    </div>
  );
}
