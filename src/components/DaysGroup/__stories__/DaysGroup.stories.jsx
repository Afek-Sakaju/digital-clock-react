import React from "react";
import { DaysGroup } from "../DaysGroup";

export default {
  title: "base-components/DaysGroup",
  component: DaysGroup,
};

const Template = (args) => <DaysGroup {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Sunday = Template.bind({});
Sunday.args = {
  currentDay: "sun",
};

export const Monday = Template.bind({});
Monday.args = {
  currentDay: "mon",
};
