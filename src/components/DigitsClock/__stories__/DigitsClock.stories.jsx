import React from "react";
import { DigitsClock } from "../DigitsClock";

export default {
  title: "base-components/DigitsClock",
  component: DigitsClock,
};

const Template = (args) => <DigitsClock {...args} />;

export const Default = Template.bind({});
Default.args = {};
