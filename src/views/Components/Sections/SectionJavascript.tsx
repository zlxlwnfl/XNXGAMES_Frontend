import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @mui/material components
import useClasses from "../../../hooks/useClasses";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Tooltip from "@mui/material/Tooltip";
import Popover from "@mui/material/Popover";
// @mui/icons-material
import LibraryBooks from "@mui/icons-material/LibraryBooks";
import Close from "@mui/icons-material/Close";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";

import { TransitionProps } from '@mui/material/transitions';

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles";



const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props: any, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function SectionJavascript() {
  const classes = useClasses(styles);
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
  return (
    <div className={(classes as any).section}>
      <div className={(classes as any).container}>
        <div className={(classes as any).title}>
          <h2>Javascript components</h2>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div className={(classes as any).title}>
              <h3>Modal</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={4}>
                <Button
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                >
                  <LibraryBooks className={(classes as any).icon} />
                  Classic
                </Button>
                <Dialog
                  classes={{
                    //root: (classes as any).center,
                    paper: (classes as any).modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    // disableTypography
                    className={(classes as any).modalHeader}
                  >
                    <IconButton
                      className={(classes as any).modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={(classes as any).modalClose} />
                    </IconButton>
                    {/* <h4 className={(classes as any).modalTitle}>Modal title</h4> */}
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={(classes as any).modalBody}
                  >
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. A small
                      river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic
                      country, in which roasted parts of sentences fly into your
                      mouth. Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic life One
                      day however a small line of blind text by the name of
                      Lorem Ipsum decided to leave for the far World of Grammar.
                    </p>
                  </DialogContent>
                  <DialogActions className={(classes as any).modalFooter}>
                    <Button color="transparent" simple>
                      Nice Button
                    </Button>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </GridItem>
            </GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={(classes as any).title}>
                <h3>Datetime Picker</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel className={(classes as any).label}>
                    Datetime Picker
                  </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <div className={(classes as any).title}>
              <h3>Popovers</h3>
            </div>
            <Button onClick={(event: any) => setAnchorElLeft(event.currentTarget)}>
              On left
            </Button>
            <Popover
              classes={{
                paper: (classes as any).popover
              }}
              open={Boolean(anchorElLeft)}
              anchorEl={anchorElLeft}
              onClose={() => setAnchorElLeft(null)}
              anchorOrigin={{
                vertical: "center",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "center",
                horizontal: "right"
              }}
            >
              <h3 className={(classes as any).popoverHeader}>Popover on left</h3>
              <div className={(classes as any).popoverBody}>
                Here will be some very useful information about his popover.
                Here will be some very useful information about his popover.
              </div>
            </Popover>
            <Button onClick={(event: any) => setAnchorElTop(event.currentTarget)}>
              On top
            </Button>
            <Popover
              classes={{
                paper: (classes as any).popover
              }}
              open={Boolean(anchorElTop)}
              anchorEl={anchorElTop}
              onClose={() => setAnchorElTop(null)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
            >
              <h3 className={(classes as any).popoverHeader}>Popover on top</h3>
              <div className={(classes as any).popoverBody}>
                Here will be some very useful information about his popover.
              </div>
            </Popover>
            <Button onClick={(event: any) => setAnchorElBottom(event.currentTarget)}>
              On bottom
            </Button>
            <Popover
              classes={{
                paper: (classes as any).popover
              }}
              open={Boolean(anchorElBottom)}
              anchorEl={anchorElBottom}
              onClose={() => setAnchorElBottom(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <h3 className={(classes as any).popoverHeader}>Popover on bottom</h3>
              <div className={(classes as any).popoverBody}>
                Here will be some very useful information about his popover.
              </div>
            </Popover>
            <Button onClick={(event: any) => setAnchorElRight(event.currentTarget)}>
              On right
            </Button>
            <Popover
              classes={{
                paper: (classes as any).popover
              }}
              open={Boolean(anchorElRight)}
              anchorEl={anchorElRight}
              onClose={() => setAnchorElRight(null)}
              anchorOrigin={{
                vertical: "center",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "center",
                horizontal: "left"
              }}
            >
              <h3 className={(classes as any).popoverHeader}>Popover on right</h3>
              <div className={(classes as any).popoverBody}>
                Here will be some very useful information about his popover.
              </div>
            </Popover>
            <br />
            <br />
            <div className={(classes as any).title}>
              <h3>Tooltips</h3>
            </div>
            <Tooltip
              id="tooltip-left"
              title="Tooltip on left"
              placement="left"
              classes={{ tooltip: (classes as any).tooltip }}
            >
              <Button>On left</Button>
            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Tooltip on top"
              placement="top"
              classes={{ tooltip: (classes as any).tooltip }}
            >
              <Button>On top</Button>
            </Tooltip>
            <Tooltip
              id="tooltip-bottom"
              title="Tooltip on bottom"
              placement="bottom"
              classes={{ tooltip: (classes as any).tooltip }}
            >
              <Button>On bottom</Button>
            </Tooltip>
            <Tooltip
              id="tooltip-right"
              title="Tooltip on right"
              placement="right"
              classes={{ tooltip: (classes as any).tooltip }}
            >
              <Button>On right</Button>
            </Tooltip>
          </GridItem>
        </GridContainer>
        <div className={(classes as any).title}>
          <h3>Carousel</h3>
        </div>
      </div>
    </div>
  );
}
