import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @mui/material components
import useClasses from "../../hooks/useClasses";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";

// core components
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/components/customDropdownStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];



const nullElement: HTMLElement| null = null;

export default function CustomDropdown(props: any) {
  const [anchorEl, setAnchorEl] = React.useState(nullElement);
  const handleClick = (event: any) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(nullElement);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = (param: any) => {
    setAnchorEl(nullElement);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const handleCloseAway = (event: any) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(nullElement);
  };
  const classes = useClasses(styles);
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding
  } = props;
  const caretClasses = classNames({
    [(classes as any).caret]: true,
    [(classes as any).caretActive]: Boolean(anchorEl),
    [(classes as any).caretRTL]: rtlActive
  });
  const dropdownItem = classNames({
    [(classes as any).dropdownItem]: true,
    [getKeyValue(classes)((hoverColor + "Hover") as (keyof typeof classes))]: true,
    [(classes as any).noLiPadding]: noLiPadding,
    [(classes as any).dropdownItemRTL]: rtlActive
  });
  let icon = null;
  switch (typeof buttonIcon) {
    case "object":
      icon = <props.buttonIcon className={(classes as any).buttonIcon} />;
      break;
    case "string":
      icon = <Icon className={(classes as any).buttonIcon}>{props.buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div>
      <div>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? "menu-list" : null}
          aria-haspopup="true"
          {...buttonProps}
          onClick={handleClick}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </Button>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup
            ? left
              ? "top-start"
              : "top"
            : left
            ? "bottom-start"
            : "bottom"
        }
        className={classNames({
          [(classes as any).popperClose]: !anchorEl,
          [(classes as any).popperResponsive]: true
        })}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            //id="menu-list"
            style={
              dropup
                ? { transformOrigin: "0 100% 0" }
                : { transformOrigin: "0 0 0" }
            }
          >
            <Paper className={(classes as any).dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className={(classes as any).menuList}>
                  {dropdownHeader !== undefined ? (
                    <MenuItem
                      onClick={() => handleClose(dropdownHeader)}
                      className={(classes as any).dropdownHeader}
                    >
                      {dropdownHeader}
                    </MenuItem>
                  ) : null}
                  {dropdownList.map((prop: any, key: any) => {
                    if (prop.divider) {
                      return (
                        <Divider
                          key={key}
                          onClick={() => handleClose("divider")}
                          className={(classes as any).dropdownDividerItem}
                        />
                      );
                    }
                    return (
                      <MenuItem
                        key={key}
                        onClick={() => handleClose(prop)}
                        className={dropdownItem}
                      >
                        {prop}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
