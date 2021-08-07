import React from "react";
import { Title } from "../../../atoms/typography/Typography";
import styles from "./button.module.css";
type ButtonType = "active" | "disabled";
export interface ButtonProps {
  label: string;
  type: ButtonType;
  onClick?: () => void;
}

const getButtonStyle = (type: ButtonType): string => {
  switch (type) {
    case "active":
      return styles.btn;
    case "disabled":
      return styles.btnDisabled;
    default:
      throw new Error("Button type is either 'active' or 'disabled'.");
  }
};

const getGradientColors = (type: ButtonType): string[] => {
  switch (type) {
    case "active":
      return ["#FF8282", "#E178ED"];
    case "disabled":
      return ["#e4e4e4", "#b3b3b3"];
    default:
      throw new Error("Button type is either 'active' or 'disabled'.");
  }
};

export const Button: React.FC<ButtonProps> = ({
  label,
  type,
  onClick = () => {
    return;
  },
}) => {
  const buttonStyle = getButtonStyle(type);
  const gradientColors = getGradientColors(type);
  return (
    <div
      className={buttonStyle}
      onClick={
        type === "active"
          ? onClick
          : () => {
              return;
            }
      }
    >
      <svg width="250" height="62">
        <defs>
          <linearGradient id={`gradient-${type}`}>
            <stop offset="0%" stopColor={gradientColors[0]} />
            <stop offset="100%" stopColor={gradientColors[1]} />
          </linearGradient>
        </defs>
        <rect
          x="5"
          y="5"
          rx="25"
          fill="none"
          stroke={`url(#gradient-${type})`}
          width="239"
          height="50"
        ></rect>
      </svg>
      <Title>{label}</Title>
    </div>
  );
};
