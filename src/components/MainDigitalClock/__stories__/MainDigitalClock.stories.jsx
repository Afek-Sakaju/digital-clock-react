import React from "react";
import { MainDigitalClock } from "../MainDigitalClockl";

export default {
  title: "base-components/MainDigitalClock",
  component: MainDigitalClock,
};

const Template = (args) => <MainDigitalClock {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const tinySize = Template.bind({});
tinySize.args = {
  height: "100px",
  width: "200px",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  height: "200px",
  width: "400px",
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  height: "400px",
  width: "600px",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  height: "600px",
  width: "1000px",
};

export const tooMuchHeight = Template.bind({});
tooMuchHeight.args = {
  height: "1000px",
  width: "700px",
};

export const tooMuchWidth = Template.bind({});
tooMuchWidth.args = {
  height: "200px",
  width: "1500px",
};

//export const tooMuchWidth = <MainDigitalClock height={"100px"} width={"2000px"} />; NOT WORKING

export const Custom = Template.bind({});
Custom.args = {
  height: "200px",
  width: "2000px",
};
