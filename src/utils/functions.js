/* The function accepts timestamp and returns the timestamp converted to 
a date, the date properties returns as object such as: 
"{day:'day', time:'HH:MM:SS', ampm:'AM', timestamp: 102391}
if timestamp not provided, returns current date. */
export function getDateFormat(
  timestamp = undefined,
  is24HoursMode = undefined
) {
  const date = typeof timestamp !== "number" ? new Date() : new Date(timestamp);

  const localeTimeAmpm = date.toLocaleDateString("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const localeTime24H = is24HoursMode
    ? date.toLocaleDateString("en-US", {
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      })
    : "";

  const [day, time12, ampm] = localeTimeAmpm.split(" ");
  const [, time24] = localeTime24H.split(" ");

  return {
    day,
    time: is24HoursMode ? time24 : time12,
    ampm,
    timestamp: date.getTime(),
    is24HoursMode,
  };
}

export function getZoneTimestamp(zone) {
  const currentTimestamp = new Date().getTime();

  return zone.isEarly
    ? currentTimestamp - zone.diff * 1000 * 60 * 60
    : currentTimestamp + zone.diff * 1000 * 60 * 60;
}
