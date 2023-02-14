import React from "react";
import { DigitsClock } from "../DigitsClock";

export default {
  title: "base-components/DigitsClock",
  component: DigitsClock,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "borderBox",
          height: "300px",
          width: "500px",
          border: "1px solid black",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = (props) => {
  return (
    <div
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        border: "1px dashed blue",
      }}
    >
      <DigitsClock />
    </div>
  );
};
Default.args = {
  width: 150,
  height: 50,
};

const Template = (args) => <DigitsClock {...args} />;
export const Custom = Template.bind({});
Custom.args = {
  time: "99:99:99",
};
