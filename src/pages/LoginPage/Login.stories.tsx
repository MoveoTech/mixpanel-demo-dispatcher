
import { Meta, Story } from "@storybook/react";
import Login, { LoginProps } from "./Login";

export default {
  component: Login,
  title: "Components/Login",
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Login1 = Template.bind({});
Login1.args = {
  onClick: () => {}
};
