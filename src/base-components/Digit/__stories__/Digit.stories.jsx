import React from "react";
import { Digit } from "../Digit";

export default {
  title: "base-components/Digit",
  component: Digit,
  argTypes: {
    value: {
      control: "inline-radio",
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  },
};

const Template = (args) => <Digit {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  (Story) => (
    <div
      style={{
        width: "500px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Story />
    </div>
  ),
];

export const CustomDigit = Template.bind({});
CustomDigit.args = {};
CustomDigit.decorators = [
  (Story) => (
    <div
      style={{
        width: "500px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        width: "300px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        width: "600px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        width: "1000px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        width: "450px",
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        width: "1200px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Story />
    </div>
  ),
];
