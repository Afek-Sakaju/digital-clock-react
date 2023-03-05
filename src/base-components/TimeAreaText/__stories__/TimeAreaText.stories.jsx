import React from "react";
import TimeAreaText from "../TimeAreaText";

export default {
  title: "base-components/TimeAreaText",
  component: TimeAreaText,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "95vw",
          height: "95vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <TimeAreaText />;

export const AdjustableSize = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "red 3px solid",
        width: `${props.width}px`,
        height: `${props.height}px`,
      }}
    >
      <TimeAreaText label={"Japan"} />
    </div>
  );
};
AdjustableSize.argTypes = {
  width: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 100,
  },
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 100,
  },
  label: { control: false },
};

const Template = (args) => <TimeAreaText {...args} />;

export const Custom = Template.bind({});
Custom.args = {
  label: "custom",
};
