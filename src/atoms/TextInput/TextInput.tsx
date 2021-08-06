import React from "react";
import { Text12pxBold } from "../typography/Typography";
import styles from "./textInput.module.css";

export interface TextInputProps {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className={`${styles.form__group} ${styles.field}`}>
      <label htmlFor={label} className={styles.form__label}><Text12pxBold>{label}</Text12pxBold></label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        className={styles.form__field}
      />
    </div>
  );
};
