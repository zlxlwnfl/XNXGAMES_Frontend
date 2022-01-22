import React from "react";
// @mui/material components
import useClasses from "../../../hooks/useClasses";
import InputAdornment from "@mui/material/InputAdornment";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import People from "@mui/icons-material/People";
import Email from "@mui/icons-material/Email";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import Button from "../../../components/CustomButtons/Button";
import CustomInput from "../../../components/CustomInput/CustomInput";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/loginStyle";



export default function SectionLogin() {
  const classes = useClasses(styles);
  return (
    <div className={(classes as any).section}>
      <div className={(classes as any).container}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={(classes as any).form}>
                <CardHeader color="primary" className={(classes as any).cardHeader}>
                  <h4>Login</h4>
                  <div className={(classes as any).socialLine}>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e: any) => e.preventDefault()}
                    >
                      <i className={(classes as any).socialIcons + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e: any) => e.preventDefault()}
                    >
                      <i className={(classes as any).socialIcons + " fab fa-facebook"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e: any) => e.preventDefault()}
                    >
                      <i
                        className={
                          (classes as any).socialIcons + " fab fa-google-plus-g"
                        }
                      />
                    </Button>
                  </div>
                </CardHeader>
                <p className={(classes as any).divider}>Or Be Classical</p>
                <CardBody>
                  <CustomInput
                    labelText="First Name..."
                    id="first"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={(classes as any).inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={(classes as any).inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={(classes as any).inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      autoComplete: "off"
                    }}
                  />
                </CardBody>
                <CardFooter className={(classes as any).cardFooter}>
                  <Button simple color="primary" size="lg">
                    Get started
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
