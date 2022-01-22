import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import SwipeableViews from "react-swipeable-views";

// @mui/material components
import useClasses from "../../hooks/useClasses";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

import styles from "../../assets/jss/material-kit-react/components/navPillsStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];



export default function NavPills(props: any) {
  const [active, setActive] = React.useState(props.active);
  const handleChange = (event: any, active: any) => {
    setActive(active);
  };
  const handleChangeIndex = (index: any) => {
    setActive(index);
  };
  const classes = useClasses(styles);
  const { tabs, direction, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [(classes as any).flexContainer]: true,
    [(classes as any).horizontalDisplay]: horizontal !== undefined
  });
  const tabButtons = (
    <Tabs
      classes={{
        root: (classes as any).root,
        fixed: (classes as any).fixed,
        flexContainer: flexContainerClasses,
        indicator: (classes as any).displayNone
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop: any, key: any) => {
        var icon: {[k: string]: any} = {};
        if (prop.tabIcon !== undefined) {
          icon.icon = <prop.tabIcon className={(classes as any).tabIcon} />;
        }
        const pillsClasses = classNames({
          [(classes as any).pills]: true,
          [(classes as any).horizontalPills]: horizontal !== undefined,
          [(classes as any).pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: getKeyValue(classes as any)(color),
              wrapped: (classes as any).tabWrapper
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={(classes as any).contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={active}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((prop: any, key: any) => {
          return (
            // <div className={(classes as any).tabContent} key={key}>
            <div key={key}>
              {prop.tabContent}
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};
