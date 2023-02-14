import React from "react";
import { DaysGroup } from "../DaysGroup";
import { daysArray } from "../../../utils";

export default {
  title: "components/DaysGroup",
  component: DaysGroup,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "borderBox",
          flexWrap: "wrap",
          height: "150px",
          width: "1000px",
          gap: "5%",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <DaysGroup {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Sunday = Template.bind({});
Sunday.args = {
  currentDay: "sun",
};

export const Monday = Template.bind({});
Monday.args = {
  currentDay: "mon",
};

export const Custom = Template.bind({});
Custom.argTypes = {
  currentDay: { control: "inline-radio", options: daysArray },
};
