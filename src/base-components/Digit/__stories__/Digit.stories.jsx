import React from "react";
import { Digit } from "../Digit";

const digitBasicStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px red solid",
};

export default {
  title: "base-components/Digit",
  component: Digit,
  argTypes: {
    value: {
      control: "inline-radio",
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "96vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Digit {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  (Story) => (
    <div
      style={{
        ...digitBasicStyle,
        width: "500px",
        height: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

export const smallDecorator = Template.bind({});
smallDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...digitBasicStyle,
        width: "300px",
        height: "100px",
      }}
    >
      <Story />
    </div>
  ),
];

export const Custom = (args) => {
  return (
    <div style={{ width: `${args.width}px`, height: `${args.height}px` }}>
      <Digit {...args} />
    </div>
  );
};

Custom.args = {
  width: 250,
  height: 150,
};

Custom.decorators = [
  (Story) => (
    <div
      style={{
        ...digitBasicStyle,
        width: "700px",
        height: "250px",
        border: "unset",
      }}
    >
      <Story />
    </div>
  ),
];
