import React from "react";
import { DaysGroup } from "../DaysGroup";
import { daysArray } from "../../../utils";

const daysGroupBasicStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "borderBox",
  flexWrap: "wrap",
  gap: "5%",
  border: "2px red solid",
};

export default {
  title: "components/DaysGroup",
  component: DaysGroup,
  decorators: [
    (Story) => (
      <div
        style={{
          ...daysGroupBasicStyle,
          height: "150px",
          width: "1000px",
          border: "unset",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <DaysGroup {...args} />;

export const Default = () => <DaysGroup />;

export const TinyDecorator = () => <DaysGroup currentDay={"mon"} />;
TinyDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...daysGroupBasicStyle,
        height: "50px",
        width: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

export const SmallDecorator = () => <DaysGroup currentDay={"mon"} />;
SmallDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...daysGroupBasicStyle,
        height: "100px",
        width: "300px",
      }}
    >
      <Story />
    </div>
  ),
];

export const MediumDecorator = () => <DaysGroup currentDay={"mon"} />;
MediumDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...daysGroupBasicStyle,
        height: "150px",
        width: "600px",
      }}
    >
      <Story />
    </div>
  ),
];

export const LargeDecorator = () => <DaysGroup currentDay={"mon"} />;
LargeDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...daysGroupBasicStyle,
        height: "300px",
        width: "1000px",
      }}
    >
      <Story />
    </div>
  ),
];

export const TooHighDecorator = () => <DaysGroup currentDay={"mon"} />;
TooHighDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...daysGroupBasicStyle,
        height: "500px",
        width: "100px",
      }}
    >
      <Story />
    </div>
  ),
];

export const TooWideDecorator = () => <DaysGroup currentDay={"mon"} />;
TooWideDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...daysGroupBasicStyle,
        height: "50px",
        width: "1200px",
      }}
    >
      <Story />
    </div>
  ),
];

export const SelectDay = Template.bind({});
SelectDay.argTypes = {
  currentDay: { control: "inline-radio", options: daysArray },
};

export const Custom = Template.bind({});
Custom.argTypes = {
  currentDay: { control: { type: "text" } },
};
