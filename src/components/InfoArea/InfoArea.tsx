import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import useClasses from "../../hooks/useClasses";

import styles from "../../assets/jss/material-kit-react/components/infoStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];



export default function InfoArea(props: any) {
  const classes = useClasses(styles);
  const { title, description, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [(classes as any).iconWrapper]: true,
    [getKeyValue(classes as any)(iconColor)]: true,
    [(classes as any).iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [(classes as any).icon]: true,
    [(classes as any).iconVertical]: vertical
  });
  return (
    <div className={(classes as any).infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={(classes as any).descriptionWrapper}>
        <h4 className={(classes as any).title}>{title}</h4>
        <p className={(classes as any).description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};
