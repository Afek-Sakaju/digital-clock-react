import React from "react";
import { DaysGroup } from "../DaysGroup";

export default {
  title: "base-components/DaysGroup",
  component: DaysGroup,
  decorators:
  [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'borderBox',
          flexWrap: 'wrap',
          height: '150px',
          width: '1500px',
          gap: '5%',
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
