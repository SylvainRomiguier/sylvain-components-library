import React from "react";
import styles from "./paper.module.css";

export const Paper:React.FC = ({children}) => 
<div className={styles.container}>
    {children}
</div>