import React, { RefObject } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
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
  const [labelState, setLabelState] = useState(styles.form__label_hide);
  const [placeHolder, setPlaceHolder] = useState(label);

  const onFocus = () => {
    setLabelState(styles.form__label_show);
    setPlaceHolder("");
  };

  const onBlur = () => {
    setPlaceHolder(label);
    console.log("value : ", value);
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
        type="text"
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
