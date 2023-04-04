import React, { useState } from "react";
import ManagedDigitsClock from "../ManagedDigitsClock";
import { getDateFormat } from "../../../utils";

const flexCentered = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default {
  title: "components/ManagedDigitsClock",
  component: ManagedDigitsClock,
  parameters: {
    controls: {
      // This line hides specified controls
      exclude:
        /((on.*Change)|(update.*)|(ampmState)|(localeTime)|(currentDay))/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          ...flexCentered,
          height: "95vh",
          width: "95vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => (
  <div
    style={{
      ...flexCentered,
      height: "200px",
      width: "500px",
    }}
  >
    <ManagedDigitsClock />
  </div>
);

export const Custom = () => {
  const [useInterval, setUseInterval] = useState(false);
  const [isMode24, setIsMode24] = useState(true);
  const [localeTime, onTimeChange] = useState(getDateFormat(1523390599955));

  return (
    <div
      style={{
        ...flexCentered,
        height: "200px",
        width: "900px",
      }}
    >
      <div
        style={{
          ...flexCentered,
          flexDirection: "column",
          width: "100%",
          flex: "1 1 auto",
        }}
      >
        <div style={{ ...flexCentered, flexDirection: "column" }}>
          <h4>useInterval</h4>
          <input
            type="checkbox"
            style={{ height: "50px", width: "50px" }}
            value={useInterval}
            onChange={(e) => setUseInterval(e.target.checked)}
          />
        </div>
        <div
          style={{
            ...flexCentered,
            flexDirection: "column",
          }}
        >
          <h4>mode24H</h4>
          <input
            type="checkbox"
            style={{ height: "50px", width: "50px" }}
            value={isMode24}
            onChange={(e) => setIsMode24(e.target.checked)}
          />
        </div>
      </div>
      <ManagedDigitsClock
        localeTime={localeTime}
        useInterval={useInterval}
        onTimeChange={onTimeChange}
        mode24H={isMode24}
      />
    </div>
  );
};

export const AdjustableSize = (props) => (
  <div
    style={{
      ...flexCentered,
      border: "red solid 3px",
      height: `${props.height}px`,
      width: `${props.width}px`,
    }}
  >
    <ManagedDigitsClock />
  </div>
);
AdjustableSize.argTypes = {
  height: {
    control: { type: "number", min: 50, max: 2000, step: 50 },
    defaultValue: 150,
  },
  width: {
    control: { type: "number", min: 100, max: 3000, step: 50 },
    defaultValue: 300,
  },
  useInterval: { control: false },
  mode24H: { control: false },
};
