import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Fillet } from "./Fillet";
import { Text16pxBold, Title } from "../../typography/Typography";

export default {
  title: "Design System/Atoms/Containers/Fillet",
  component: Fillet,
} as ComponentMeta<typeof Fillet>;

const Template: ComponentStory<typeof Fillet> = (args) => (
  <div style={{ width: "90%" }}>
    <Fillet>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Title>TITLE Title title</Title>
        <Text16pxBold>Text Text Text</Text16pxBold>
        <Text16pxBold>Text Text Text</Text16pxBold>
        <Text16pxBold>Text Text Text</Text16pxBold>
        <Text16pxBold>Text Text Text</Text16pxBold>
      </div>
    </Fillet>
  </div>
);

export const FilletTemplate = Template.bind({});
