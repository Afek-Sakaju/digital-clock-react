/* The function accepts timestamp and returns the timestamp converted to 
a date, the date properties returns as object such as: 
"{day:'day', time:'HH:MM:SS', ampm:'AM', timestamp: 102391}
if timestamp not provided, returns current date. */
export function getDateFormat(timestamp = undefined) {
  const date = typeof num !== "number" ? new Date() : new Date(timestamp);

  const localeTime = date.toLocaleDateString("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const [day, time, ampm] = localeTime.split(" ");

  return { day, time, ampm, timestamp: date.getTime() };
}
