import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput, TextInputProps } from "./TextInput";
import { useState } from "react";

export default {
  title: "Design System/Atoms/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [value, setValue] = useState<string | number>("");
  return (
  <div style={{ width: "90%" }}>
    <TextInput label="Text Input Label" value={value} onChange={(_value) => setValue(_value)}/>
  </div>
);
  }

export const TextInputTemplate = Template.bind({});
