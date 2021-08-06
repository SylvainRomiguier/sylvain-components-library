import React from "react";
import styles from "./fillet.module.css";

export const Fillet: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
