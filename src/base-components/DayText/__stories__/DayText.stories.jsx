import React from "react";
import { DayText } from "../DayText";
import { daysArray } from "../../../utils";

export default {
  title: "base-components/DayText",
  component: DayText,
  argTypes: {
    label: { control: { type: "text" } },
    currentDay: { control: { type: "text" } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "97vw",
          height: "98vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <DayText {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const longLabelActive = Template.bind({});
longLabelActive.args = {
  label: "long-text-example",
  currentDay: "long-text-example",
};

export const longLabelPassive = Template.bind({});
longLabelPassive.args = {
  label: "long-text-example",
};

export const MediumLabelActive = Template.bind({});
MediumLabelActive.args = {
  label: "wednesday",
  currentDay: "wednesday",
};

export const MediumLabelPassive = Template.bind({});
MediumLabelPassive.args = {
  label: "wednesday",
};

export const ShortLabelActive = Template.bind({});
ShortLabelActive.args = {
  label: "mon",
  currentDay: "mon",
};

export const ShortLabelPassive = Template.bind({});
ShortLabelPassive.args = {
  label: "mon",
};

export const SelectDay = Template.bind({});
SelectDay.args = {
  currentDay: "sun",
};
SelectDay.argTypes = {
  label: { control: "inline-radio", options: daysArray },
  currentDay: { control: "inline-radio", options: daysArray },
};

export const Custom = Template.bind({});
Custom.args = {
  label: "custom",
  currentDay: "choose-day",
};
