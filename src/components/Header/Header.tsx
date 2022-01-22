import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import useClasses from "../../hooks/useClasses";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
// @mui/icons-material
import Menu from "@mui/icons-material/Menu";
// core components
import styles from "../../assets/jss/material-kit-react/components/headerStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];



export default function Header(props: any) {
  const classes = useClasses(styles);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(getKeyValue(classes as any)(color));
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(getKeyValue(classes as any)(changeColorOnScroll.color));
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(getKeyValue(classes as any)(color));
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(getKeyValue(classes as any)(changeColorOnScroll.color));
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [(classes as any).appBar]: true,
    [getKeyValue(classes as any)(color)]: color,
    [(classes as any).absolute]: absolute,
    [(classes as any).fixed]: fixed
  });
  const brandComponent = <Button className={(classes as any).title}>{brand}</Button>;
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={(classes as any).container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={(classes as any).flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: (classes as any).drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={(classes as any).appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};
