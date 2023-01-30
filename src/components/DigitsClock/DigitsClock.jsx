import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Digit } from "../../base-components";
import "./DigitsClock.scss";

export function DigitsClock({
  updateAmPm,
  ampmState,
  localeTime,
  setLocaleTime,
  currentDay,
  setCurrentDay,
}) {
  const [day, time, ampm] = localeTime.split(" ");
  let [hh, mm, ss] = time.split(":");

  hh = hh.padStart(2, "0");
  mm = mm.padStart(2, "0");
  ss = ss.padStart(2, "0");

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setLocaleTime(
        new Date().toLocaleDateString("en-US", {
          weekday: "short",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })
      );
    }, 120000); // return to 1000

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (day !== currentDay) {
      setCurrentDay(day);
    }
  }, [day]);

  useEffect(() => {
    if (ampm !== ampmState) {
      updateAmPm(ampm);
    }
  }, []);

  return (
    <div className="numbersContainer">
      {hh.split("").map((digit, index) => (
        <Digit value={+digit} key={`hh ${index}`} />
      ))}
      <div className="twoDots">:</div>
      {mm.split("").map((digit, index) => (
        <Digit value={+digit} key={`mm ${index}`} />
      ))}
      <div className="twoDots">:</div>
      {ss.split("").map((digit, index) => (
        <Digit value={+digit} key={`ss ${index}`} />
      ))}
    </div>
  );
}

DigitsClock.propTypes = {
  updateAmPm: PropTypes.func,
  ampmState: PropTypes.string,
  localeTime: PropTypes.string,
  setLocaleTime: PropTypes.func,
  currentDay: PropTypes.string,
  setCurrentDay: PropTypes.func,
};

//DayText.defaultProps = {};
