import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

export default {
  title: "Design System/Molecules/Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ActiveButtonTemplate = Template.bind({});
ActiveButtonTemplate.args = {
  label: "Active",
  type: "active",
  onClick: action("Clic Login"),
};

export const DisabledButtonTemplate = Template.bind({});
DisabledButtonTemplate.args = {
  label: "Disabled",
  type: "disabled",
};
