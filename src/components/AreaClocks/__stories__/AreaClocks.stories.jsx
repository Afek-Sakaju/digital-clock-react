import React from "react";

import { AreaClocks } from "../AreaClocks";
import { timeZones } from "../../../utils";

export default {
  title: "components/AreaClocks",
  component: AreaClocks,
  parameters: {
    controls: {
      // This line hides specified controls
      exclude: /(^timeZones$)/g,
    },
  },
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

export const Default = () => <AreaClocks />;

export const AdjustableSizeNormal = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "3px red solid",
        width: `${props.width}px`,
        height: `${props.height}px`,
      }}
    >
      <AreaClocks />
    </div>
  );
};
AdjustableSizeNormal.argTypes = {
  width: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 550,
  },
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 200,
  },
  clocksSize: { control: false },
};

export const AdjustableSizeSmall = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "3px red solid",
        width: `${props.width}px`,
        height: `${props.height}px`,
      }}
    >
      <AreaClocks clocksSize={"small"} />
    </div>
  );
};
AdjustableSizeSmall.argTypes = {
  width: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 450,
  },
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 200,
  },
  clocksSize: { control: false },
};

const Template = (args) => <AreaClocks {...args} />;

export const Custom = Template.bind({});
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        border: "3px green solid",
      }}
    >
      <Story />
    </div>
  ),
];
Custom.argTypes = {
  clocksSize: {
    control: "inline-radio",
    options: ["small", "normal"],
    defaultValue: "normal",
  },
};
Custom.args = {
  timeZones: timeZones,
};
