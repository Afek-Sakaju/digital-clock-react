import React from "react";
import Clock from "@components/Clock";

export default {
  title: "components/Clock",
  component: Clock,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
          width: "95vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px",
      width: "600px",
    }}
  >
    <Clock />
  </div>
);

const Template = (args) => <Clock {...args} />;

export const Custom = Template.bind({});
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "600px",
      }}
    >
      <Story />
    </div>
  ),
];
Custom.argTypes = {
  size: {
    control: "inline-radio",
    options: ["normal", "small"],
    defaultValue: "normal",
  },
  timestamp: { control: false },
};
