import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paper } from "./Paper";
import { Text16pxBold, Title } from "../../typography/Typography";

export default {
  title: "Design System/Atoms/Containers/Paper",
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => (
  <div style={{ width: "90%" }}>
    <Paper>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Title>TITLE Title title</Title>
        <Text16pxBold>Text Text Text</Text16pxBold>
        <Text16pxBold>Text Text Text</Text16pxBold>
        <Text16pxBold>Text Text Text</Text16pxBold>
        <Text16pxBold>Text Text Text</Text16pxBold>
      </div>
    </Paper>
  </div>
);

export const PaperTemplate = Template.bind({});
