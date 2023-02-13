import React from "react";
import { DigitsClock } from "../DigitsClock";

export default {
  title: "components/DigitsClock",
  component: DigitsClock,
  /* fill :
  argTypes: {
    height: { control: { type: "text" } },
    width: { control: { type: "text" } },
  }, */
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "borderBox",
          height: "700px",
          width: "1500px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <DigitsClock {...args} />;

export const Default = Template.bind({});
Default.args = {};
