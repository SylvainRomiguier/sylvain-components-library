import React from "react";
import { Text12pxBold } from "../typography/Typography";

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
    <>
      <label htmlFor={label}><Text12pxBold>{label}</Text12pxBold></label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </>
  );
};
