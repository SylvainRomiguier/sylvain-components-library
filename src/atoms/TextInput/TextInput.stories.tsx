import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput, TextInputProps } from "./TextInput";
import { useState } from "react";

export default {
  title: "Design System/Atoms/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [value, setValue] = useState<string>("");
  return (
  <div style={{ width: "90%" }}>
    <TextInput label={args.label} value={value} onChange={(_value) => setValue(_value)} password={args.password}/>
  </div>
);
  }

export const TextInputTemplate = Template.bind({});
TextInputTemplate.args = {
  label: "Text Input",
  password: false
};

export const PasswordInputTemplate = Template.bind({});
PasswordInputTemplate.args = {
  label: "Password",
  password: true
};
