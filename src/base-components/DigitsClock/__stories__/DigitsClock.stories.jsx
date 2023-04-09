import React from "react";

import DigitsClock from "@base-components/DigitsClock";

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
          height: "95vh",
          width: "95vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <DigitsClock />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "500px",
        border: "1px solid black",
      }}
    >
      <Story />
    </div>
  ),
];

export const AdjustSize = (props) => (
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
AdjustSize.argTypes = {
  width: {
    control: {
      type: "number",
      min: 100,
      max: 4000,
      step: 50,
    },
    defaultValue: 500,
  },
  height: {
    control: { type: "number", min: 100, max: 3000, step: 50 },
    defaultValue: 200,
  },
  time: { control: false },
};

const Template = (args) => <DigitsClock {...args} />;

export const Custom = Template.bind({});
Custom.args = {
  time: "99:99:99",
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "500px",
        border: "1px solid black",
      }}
    >
      <Story />
    </div>
  ),
];
