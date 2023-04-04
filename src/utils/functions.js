import { DAYS_ARRAY } from "./consts";

export function getZoneTimestamp(zone) {
  const currentTimestamp = new Date().getTime();

  return zone.isEarly
    ? currentTimestamp - zone.diff * 1000 * 60 * 60
    : currentTimestamp + zone.diff * 1000 * 60 * 60;
}

export function assertTwoDigitsTimeUnits({ hours, minutes, seconds }) {
  hours = `${hours}`.padStart(2, "0");
  minutes = `${minutes}`.padStart(2, "0");
  seconds = `${seconds}`.padStart(2, "0");

  return [hours, minutes, seconds].join(":");
}

export function getTimePropertiesFromDate(date, is24HoursMode) {
  const day = DAYS_ARRAY[date.getDay()];
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  if (!is24HoursMode) hours %= 12;

  const time = assertTwoDigitsTimeUnits({ hours, minutes, seconds });
  return { time, day, ampm };
}

/* The function "getDateFormat" accepts number "timestamp" then returns object
of the date properties from the timestamp provided, for example: 
{day:'Sat', time:'02:05:55', ampm:'AM', timestamp: 1675137155, is24HoursMode: false}
if timestamp not provided, returns current date. */
export function getDateFormat(
  timestamp = undefined,
  is24HoursMode = undefined
) {
  const date = typeof timestamp !== "number" ? new Date() : new Date(timestamp);
  const { time, day, ampm } = getTimePropertiesFromDate(date, is24HoursMode);

  return {
    day,
    time,
    ampm,
    timestamp: date.getTime(),
    is24HoursMode,
  };
}
