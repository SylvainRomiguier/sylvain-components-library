import React from "react";
import { useState } from "react";
import styles from "./textInput.module.css";

export interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  password?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  password = false
}) => {
  const [labelState, setLabelState] = useState(styles.form__label_hide);
  const [placeHolder, setPlaceHolder] = useState(label);

  const onFocus = () => {
    setLabelState(styles.form__label_show);
    setPlaceHolder("");
  };

  const onBlur = () => {
    setPlaceHolder(label);
    if (value === undefined || value === "") {
      setLabelState(styles.form__label_hide);
    } else {
      setLabelState(styles.form__label_show_blur);
    }
  };

  return (
    <div className={`${styles.form__group} ${styles.field}`}>
      <label htmlFor={label} className={labelState}>
        {label}
      </label>
      <input
        type={password ? "password": "text"}
        id={label}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        className={styles.form__field}
        placeholder={placeHolder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
