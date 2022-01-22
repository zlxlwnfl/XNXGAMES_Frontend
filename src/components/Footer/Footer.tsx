/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@mui/material";
import useClasses from "../../hooks/useClasses";

// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";

import styles from "../../assets/jss/material-kit-react/components/footerStyle";



export default function Footer(props: any) {
  const classes = useClasses(styles);
  const { whiteFont } = props;
  const footerClasses = classNames({
    [(classes as any).footer]: true,
    [(classes as any).footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [(classes as any).a]: true,
    [(classes as any).footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={(classes as any).container}>
        <div className={(classes as any).left}>
          <List className={(classes as any).list}>
            <ListItem className={(classes as any).inlineBlock}>
              <a
                href="https://www.creative-tim.com/?ref=mkr-footer"
                className={(classes as any).block}
                target="_blank"
              >
                Creative Tim
              </a>
            </ListItem>
            <ListItem className={(classes as any).inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=mkr-footer"
                className={(classes as any).block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={(classes as any).inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=mkr-footer"
                className={(classes as any).block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={(classes as any).inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={(classes as any).block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={(classes as any).right}>
          &copy; {new Date().getFullYear()} , made with{" "}
          <Favorite className={(classes as any).icon} /> by{" "}
          <a
            href="https://www.creative-tim.com?ref=mkr-footer"
            className={aClasses}
            target="_blank"
          >
            Creative Tim
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}
