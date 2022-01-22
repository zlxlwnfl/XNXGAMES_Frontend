import React from "react";
// @mui/material components
import useClasses from "../../../hooks/useClasses";

// @mui/icons-material
import Face from "@mui/icons-material/Face";
import Chat from "@mui/icons-material/Chat";
import Build from "@mui/icons-material/Build";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomTabs from "../../../components/CustomTabs/CustomTabs";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/tabsStyle";



export default function SectionTabs() {
  const classes = useClasses(styles);
  return (
    <div className={(classes as any).section}>
      <div className={(classes as any).container}>
        <div id="nav-tabs">
          <h3>Navigation Tabs</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Tabs with Icons on Card</small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Profile",
                    tabIcon: Face,
                    tabContent: (
                      <p className={(classes as any).textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Messages",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={(classes as any).textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "Settings",
                    tabIcon: Build,
                    tabContent: (
                      <p className={(classes as any).textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Tabs on Plain Card</small>
              </h3>
              <CustomTabs
                plainTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Home",
                    tabContent: (
                      <p className={(classes as any).textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Updates",
                    tabContent: (
                      <p className={(classes as any).textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "History",
                    tabContent: (
                      <p className={(classes as any).textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
