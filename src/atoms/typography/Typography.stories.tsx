import React from "react";
import { ComponentStory } from "@storybook/react";

import { Text12pxBold, Text16pxBold, Title } from "./Typography";

export default {
  title: "Design System",
};

export const Typography: ComponentStory<typeof Text12pxBold> = () => (
    <>
  <Text12pxBold>Text 12px Bold example</Text12pxBold>
  <Text16pxBold>Text 16px Bold example</Text16pxBold>
  <Title>Title Title Title Title</Title>
  </>
);
