import React from "react";
import styles from "./fillet.module.css";
import colors from "../../colors/colors";

export const Fillet: React.FC = ({ children }) => {
  return (
    <div className={styles.container} style={{ borderColor: colors.primary }}>
      {children}
    </div>
  );
};
