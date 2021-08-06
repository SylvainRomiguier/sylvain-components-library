import React from "react";
import styles from "./gradient.module.css";

export const Gradient: React.FC = ({ children }) => {
  return <div className={styles.gradient}>{children}</div>;
};
