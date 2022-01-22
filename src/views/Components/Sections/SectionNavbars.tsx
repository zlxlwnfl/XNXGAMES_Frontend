import React from "react";
// @mui/material components
import useClasses from "../../../hooks/useClasses";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Search from "@mui/icons-material/Search";
import Email from "@mui/icons-material/Email";
import Face from "@mui/icons-material/Face";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Explore from "@mui/icons-material/Explore";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Header from "../../../components/Header/Header";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import Button from "../../../components/CustomButtons/Button";

import image from "../../../assets/img/bg.jpg";
import profileImage from "../../../assets/img/faces/avatar.jpg";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle";



export default function SectionNavbars() {
  const classes = useClasses(styles);
  return (
    <div className={(classes as any).section}>
      <div className={(classes as any).container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div className={(classes as any).title}>
              <h3>Menu</h3>
            </div>
            <Header
              brand="Menu"
              color="primary"
              leftLinks={
                <List className={(classes as any).list}>
                  <ListItem className={(classes as any).listItem}>
                    <Button
                      href="#pablo"
                      className={(classes as any).navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={(classes as any).listItem}>
                    <Button
                      href="#pablo"
                      className={(classes as any).navLink}
                      onClick={(e: any) => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={(classes as any).listItem}>
                    <CustomDropdown
                      buttonText="Dropdown"
                      dropdownHeader="Dropdown Header"
                      buttonProps={{
                        className: (classes as any).navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <div className={(classes as any).title}>
              <h3>Menu with Icons</h3>
            </div>
            <Header
              brand="Icons"
              color="info"
              rightLinks={
                <List className={(classes as any).list}>
                  <ListItem className={(classes as any).listItem}>
                    <Button color="transparent" className={(classes as any).navLink}>
                      <Email className={(classes as any).icons} />
                    </Button>
                  </ListItem>
                  <ListItem className={(classes as any).listItem}>
                    <Button color="transparent" className={(classes as any).navLink}>
                      <Face className={(classes as any).icons} />
                    </Button>
                  </ListItem>
                  <ListItem className={(classes as any).listItem}>
                    <CustomDropdown
                      left
                      hoverColor="info"
                      dropdownHeader="Dropdown Header"
                      buttonIcon="settings"
                      buttonProps={{
                        className: (classes as any).navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
          </GridItem>
        </GridContainer>
        <div className={(classes as any).title}>
          <h3>Navigation</h3>
        </div>
      </div>
      <div id="navbar" className={(classes as any).navbar}>
        <div
          className={(classes as any).navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
        >
          <Header
            brand="Brand"
            color="rose"
            leftLinks={
              <List className={(classes as any).list}>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    Link
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    Link
                  </Button>
                </ListItem>
              </List>
            }
            rightLinks={
              <div>
                <CustomInput
                  white
                  inputRootCustomClasses={(classes as any).inputRootCustomClasses}
                  formControlProps={{
                    className: (classes as any).formControl
                  }}
                  inputProps={{
                    placeholder: "Search",
                    inputProps: {
                      "aria-label": "Search",
                      //className: (classes as any).searchInput
                    }
                  }}
                />
                <Button justIcon round color="white">
                  <Search className={(classes as any).searchIcon} />
                </Button>
              </div>
            }
          />
          <Header
            brand="Info Color"
            color="info"
            rightLinks={
              <List className={(classes as any).list}>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink + " " + (classes as any).navLinkActive}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    Profile
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    Settings
                  </Button>
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Primary Color"
            color="primary"
            rightLinks={
              <List className={(classes as any).list}>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink + " " + (classes as any).navLinkActive}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    <Explore className={(classes as any).icons} /> Discover
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    <AccountCircle className={(classes as any).icons} /> Profile
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    <Icon className={(classes as any).icons}>settings</Icon> Settings
                  </Button>
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Navbar with notifications"
            color="dark"
            rightLinks={
              <List className={(classes as any).list}>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    Wishlist
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    justIcon
                    round
                    href="#pablo"
                    className={(classes as any).notificationNavLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="rose"
                  >
                    <Email className={(classes as any).icons} />
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <CustomDropdown
                    left
                    caret={false}
                    hoverColor="black"
                    dropdownHeader="Dropdown Header"
                    buttonText={
                      <img
                        src={profileImage}
                        className={(classes as any).img}
                        alt="profile"
                      />
                    }
                    buttonProps={{
                      className:
                        (classes as any).navLink + " " + (classes as any).imageDropdownButton,
                      color: "transparent"
                    }}
                    dropdownList={[
                      "Me",
                      "Settings and other stuff",
                      "Sign out"
                    ]}
                  />
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Navbar with profile"
            rightLinks={
              <List className={(classes as any).list}>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).navLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="transparent"
                  >
                    Wishlist
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    href="#pablo"
                    className={(classes as any).registerNavLink}
                    onClick={(e: any) => e.preventDefault()}
                    color="rose"
                    round
                  >
                    Register
                  </Button>
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Transparent"
            color="transparent"
            rightLinks={
              <List className={(classes as any).list}>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    color="transparent"
                    className={
                      // (classes as any).navLink + " " + (classes as any).socialIconsButton
                      (classes as any).navLink
                    }
                  >
                    <i
                      className={
                        (classes as any).socialIcons +
                        " " +
                        (classes as any).marginRight5 +
                        " fab fa-twitter"
                      }
                    />{" "}
                    Twitter
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    color="transparent"
                    className={
                      // (classes as any).navLink + " " + (classes as any).socialIconsButton
                      (classes as any).navLink
                    }
                  >
                    <i
                      className={
                        (classes as any).socialIcons +
                        " " +
                        (classes as any).marginRight5 +
                        " fab fa-facebook"
                      }
                    />{" "}
                    Facebook
                  </Button>
                </ListItem>
                <ListItem className={(classes as any).listItem}>
                  <Button
                    color="transparent"
                    className={
                      // (classes as any).navLink + " " + (classes as any).socialIconsButton
                      (classes as any).navLink
                    }
                  >
                    <i
                      className={
                        (classes as any).socialIcons +
                        " " +
                        (classes as any).marginRight5 +
                        " fab fa-instagram"
                      }
                    />{" "}
                    Instagram
                  </Button>
                </ListItem>
              </List>
            }
          />
        </div>
      </div>
    </div>
  );
}
