import React from "react";
import { MainDigitalClock } from "../MainDigitalClockl";

export default {
  title: "components/MainDigitalClock",
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

export const Default = () => <MainDigitalClock />;

export const TinySize = () => <MainDigitalClock height={"5%"} width={"10%"} />;

export const SmallSize = () => (
  <MainDigitalClock height={"20%"} width={"30%"} />
);

export const MediumSize = () => (
  <MainDigitalClock height={"30%"} width={"40%"} />
);

export const LargeSize = () => (
  <MainDigitalClock height={"50%"} width={"70%"} />
);

export const TooMuchHeight = () => (
  <MainDigitalClock height={"600px"} width={"100px"} />
);

export const TooMuchWidth = () => (
  <MainDigitalClock height={"100px"} width={"2000px"} />
);

export const Custom = Template.bind({});
Custom.argTypes = {
  height: { control: { type: "text" } },
  width: { control: { type: "text" } },
};
