import { containerFluid } from "../../../material-kit-react";

import imagesStyle from "../../imagesStyles";
// import { Theme, useTheme } from "@emotion/react";

const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...containerFluid,
    textAlign: "center !important" as any
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
