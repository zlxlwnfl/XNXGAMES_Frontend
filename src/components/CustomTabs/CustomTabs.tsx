import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// material-ui components
import useClasses from "../../hooks/useClasses";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
// core components
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";

import styles from "../../assets/jss/material-kit-react/components/customTabsStyle";



export default function CustomTabs(props: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, value: number) => {
    setValue(value);
  };
  const classes = useClasses(styles);
  const { headerColor, plainTabs, tabs, title, rtlActive } = props;
  const cardTitle = classNames({
    [(classes as any).cardTitle]: true,
    [(classes as any).cardTitleRTL]: rtlActive
  });
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: (classes as any).tabsRoot,
            indicator: (classes as any).displayNone
          }}
        >
          {tabs.map((prop: any, key: any) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon:
                  typeof prop.tabIcon === "string" ? (
                    <Icon>{prop.tabIcon}</Icon>
                  ) : (
                    <prop.tabIcon />
                  )
              };
            }
            return (
              <Tab
                classes={{
                  root: (classes as any).tabRootButton,
                  //label: (classes as any).tabLabel,
                  selected: (classes as any).tabSelected,
                  wrapped: (classes as any).tabWrapper
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop: any, key: any) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
}
