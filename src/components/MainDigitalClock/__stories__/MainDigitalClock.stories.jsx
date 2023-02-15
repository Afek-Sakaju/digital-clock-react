import React from "react";
import { MainDigitalClock } from "../MainDigitalClockl";

export default {
  title: "components/MainDigitalClock",
  component: MainDigitalClock,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "97vh",
          width: "97vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <MainDigitalClock />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        width: "800px",
      }}
    >
      <Story />
    </div>
  ),
];

export const Custom = (props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: `${props.height ?? 200}px`,
      width: `${props.width ?? 600}px`,
    }}
  >
    <MainDigitalClock height={"100%"} width={"100%"} />
  </div>
);
Custom.argTypes = {
  height: { control: { type: "number", min: 100, max: 3000, step: 50 } },
  width: { control: { type: "number", min: 100, max: 4000, step: 50 } },
};
