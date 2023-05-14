/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";

import CustomInput from "../../components/CustomInput/CustomInput";
import Search from "@material-ui/icons/Search";

import styles from "../../styles/jss/nextjs-material-kit/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText="GAME"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            dropdownList={[
              <Link href="/components">
                <a className={classes.dropdownLink}>All components</a>
              </Link>,
              <a
                href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
                target="_blank"
                className={classes.dropdownLink}
              >
                Documentation
              </a>
            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="blog"
            color="transparent"
            className={classes.navLink}
          >
            BOARD
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="https://github.com/app-generator/nextjs-material-kit"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            MYPAGE
          </Button>
        </ListItem>
        {/* <ListItem>
          <CustomInput
            white
            inputRootCustomClasses={classes.inputRootCustomClasses}
            formControlProps={{
              className: classes.formControl
            }}
            inputProps={{
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search",
                className: classes.searchInput
              }
            }}
          />
          <Button justIcon round color="white">
            <Search className={classes.searchIcon} />
          </Button>
        </ListItem> */}
      </List>
    </div>
  );
}
