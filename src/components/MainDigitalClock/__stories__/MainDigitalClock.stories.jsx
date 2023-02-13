import React from "react";
import { MainDigitalClock } from "../MainDigitalClockl";
import { daysArray } from "../../../utils";

export default {
  title: "base-components/MainDigitalClock",
  component: MainDigitalClock,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "97vh",
          width: "97vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <MainDigitalClock {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const tinySize = Template.bind({});
tinySize.args = {
  height: "5%",
  width: "10%",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  height: "20%",
  width: "30%",
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  height: "30%",
  width: "40%",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  height: "50%",
  width: "70%",
};

export const tooMuchHeight = Template.bind({});
tooMuchHeight.args = {
  height: "100%",
  width: "20%",
};

export const tooMuchWidth = Template.bind({});
tooMuchWidth.args = {
  height: "20%",
  width: "100%",
};

// export const tooMuchWidth = <MainDigitalClock height={"100px"} width={"2000px"} />;
// the line above is not working

export const Custom = Template.bind({});
Custom.argTypes = {
  height: { control: { type: "number", min: 100, max: 5000, step: 50 } },
  width: { control: { type: "number", min: 100, max: 5000, step: 50 } },
};
