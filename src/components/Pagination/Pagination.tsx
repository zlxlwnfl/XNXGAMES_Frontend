import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @mui/material components
import useClasses from "../../hooks/useClasses";
import Button from "@mui/material/Button";

import styles from "../../assets/jss/material-kit-react/components/paginationStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];



export default function Pagination(props: any) {
  const classes = useClasses(styles);
  const { pages, color } = props;
  return (
    <ul className={(classes as any).pagination}>
      {pages.map((prop: any, key: any) => {
        const paginationLink = classNames({
          [(classes as any).paginationLink]: true,
          [getKeyValue(classes as any)(color)]: prop.active,
          [(classes as any).disabled]: prop.disabled
        });
        return (
          <li className={(classes as any).paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => alert("you've clicked " + prop.text)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

Pagination.defaultProps = {
  color: "primary"
};

