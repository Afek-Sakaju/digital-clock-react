import React, { useState } from "react";
import { ManagedDigitsClock } from "../ManagedDigitsClock";

export default {
  title: "components/ManagedDigitsClock",
  component: ManagedDigitsClock,
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
          height: "100px",
          width: "300px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Interval = () => {
  const [useInterval, setUseInterval] = useState(true);
  const [time, setTime] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        value={useInterval}
        onChange={(e) => setUseInterval(e.target.checked)}
      />
      <ManagedDigitsClock useInterval={useInterval} date={1676410221153} />
    </>
  );
};

const Template = (args) => <ManagedDigitsClock {...args} />;

export const Default = Template.bind({});
Default.args = {};
