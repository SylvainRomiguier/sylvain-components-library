import React from "react";
import { Gradient } from "../colors/Gradient";
import styles from "./typography.module.css";
import colors from "../colors/colors";
export const Text16pxBold: React.FC = ({ children }) => (
  <div className={styles.text16pxBold} style={{ color: colors.primary }}>
    {children}
  </div>
);
export const Text12pxBold: React.FC = ({ children }) => (
  <div className={styles.text12pxBold} style={{ color: colors.primary }}>
    {children}
  </div>
);
export const Title: React.FC = ({ children }) => (
  <Text16pxBold>
    <Gradient>{children}</Gradient>
  </Text16pxBold>
);
