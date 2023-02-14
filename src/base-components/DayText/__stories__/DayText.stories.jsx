import React from "react";
import { DayText } from "../DayText";
import { daysArray } from "../../../utils";

const exampleLabels = ["example-of-long-text", "mediumText", "short", "txt"];

const dayTextBasicStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px red solid",
};

export default {
  title: "base-components/DayText",
  component: DayText,
  decorators: [
    (Story) => (
      <div
        style={{
          ...dayTextBasicStyle,
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

const Template = (args) => <DayText {...args} />;

export const Default = () => <DayText />;

export const TinyDecorator = Template.bind({});
TinyDecorator.argTypes = {
  label: {
    control: "inline-radio",
    options: exampleLabels,
  },
  currentDay: {
    control: "inline-radio",
    options: exampleLabels,
  },
};
TinyDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...dayTextBasicStyle,
        width: "5%",
        height: "5%",
      }}
    >
      <Story />
    </div>
  ),
];

export const SmallDecorator = Template.bind({});
SmallDecorator.argTypes = {
  label: {
    control: "inline-radio",
    options: exampleLabels,
  },
  currentDay: {
    control: "inline-radio",
    options: exampleLabels,
  },
};
SmallDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...dayTextBasicStyle,
        width: "10%",
        height: "10%",
      }}
    >
      <Story />
    </div>
  ),
];

export const MediumDecorator = Template.bind({});
MediumDecorator.argTypes = {
  label: {
    control: "inline-radio",
    options: exampleLabels,
  },
  currentDay: {
    control: "inline-radio",
    options: exampleLabels,
  },
};
MediumDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...dayTextBasicStyle,
        width: "20%",
        height: "20%",
      }}
    >
      <Story />
    </div>
  ),
];

export const LargeDecorator = Template.bind({});
LargeDecorator.argTypes = {
  label: {
    control: "inline-radio",
    options: exampleLabels,
  },
  currentDay: {
    control: "inline-radio",
    options: exampleLabels,
  },
};
LargeDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...dayTextBasicStyle,
        width: "30%",
        height: "30%",
      }}
    >
      <Story />
    </div>
  ),
];

export const TooHighDecorator = Template.bind({});
TooHighDecorator.argTypes = {
  label: {
    control: "inline-radio",
    options: exampleLabels,
  },
  currentDay: {
    control: "inline-radio",
    options: exampleLabels,
  },
};
TooHighDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...dayTextBasicStyle,
        width: "5%",
        height: "50%",
      }}
    >
      <Story />
    </div>
  ),
];

export const TooWideDecorator = Template.bind({});
TooWideDecorator.argTypes = {
  label: {
    control: "inline-radio",
    options: exampleLabels,
  },
  currentDay: {
    control: "inline-radio",
    options: exampleLabels,
  },
};
TooWideDecorator.decorators = [
  (Story) => (
    <div
      style={{
        ...dayTextBasicStyle,
        width: "70%",
        height: "3%",
      }}
    >
      <Story />
    </div>
  ),
];

export const SelectDay = Template.bind({});
SelectDay.argTypes = {
  label: { control: "inline-radio", options: daysArray },
  currentDay: { control: "inline-radio", options: daysArray },
};

export const Custom = Template.bind({});
Custom.args = {
  label: "custom",
  currentDay: "choose-day",
};
