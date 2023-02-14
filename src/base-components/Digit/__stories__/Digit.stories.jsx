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
          ...digitBasicStyle,
          width: "95vw",
          height: "95vh",
          border: "unset",
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

export const mediumDecorator = Template.bind({});
mediumDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...digitBasicStyle,
        width: "600px",
        height: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

export const bigDecorator = Template.bind({});
bigDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...digitBasicStyle,
        width: "1000px",
        height: "400px",
      }}
    >
      <Story />
    </div>
  ),
];

export const tooMuchHeight = Template.bind({});
tooMuchHeight.decorators = [
  (Story) => (
    <div
      style={{
        ...digitBasicStyle,
        width: "300px",
        height: "600px",
      }}
    >
      <Story />
    </div>
  ),
];

export const tooMuchWidth = Template.bind({});
tooMuchWidth.decorators = [
  (Story) => (
    <div
      style={{
        ...digitBasicStyle,
        width: "1200px",
        height: "50px",
      }}
    >
      <Story />
    </div>
  ),
];

export const Custom = Template.bind({});
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
