import React from "react";
import { DayText } from "../DayText";

export default {
  title: "base-components/DayText",
  component: DayText,
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
  label: "loemrkalemopsum-long",
  currentDay: "loemrkalemopsum-long",
};

export const longLabelPassive = Template.bind({});
longLabelPassive.args = {
  label: "loemrkalemopsum-long",
};

export const MediumLabelActive = Template.bind({});
MediumLabelActive.args = {
  label: "medium",
  currentDay: "medium",
};

export const MediumLabelPassive = Template.bind({});
MediumLabelPassive.args = {
  label: "medium",
};

export const ShortLabelActive = Template.bind({});
ShortLabelActive.args = {
  label: "abc",
  currentDay: "abc",
};

export const ShortLabelPassive = Template.bind({});
ShortLabelPassive.args = {
  label: "abc",
};
