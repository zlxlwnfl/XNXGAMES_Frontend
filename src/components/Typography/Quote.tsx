import React from "react";
// @mui/material components
import useClasses from "../../hooks/useClasses";
// core components
import styles from "../../assets/jss/material-kit-react/components/typographyStyle";



export default function Quote(props: any) {
  const { text, author } = props;
  const classes = useClasses(styles);
  return (
    <blockquote className={(classes as any).defaultFontStyle + " " + (classes as any).quote}>
      <p className={(classes as any).quoteText}>{text}</p>
      <small className={(classes as any).quoteAuthor}>{author}</small>
    </blockquote>
  );
}
