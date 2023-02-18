export * from "./consts";

/**
 *
 */
export function getDateFormat(timestamp = undefined) {
  const date = timestamp === undefined ? new Date() : new Date(timestamp);

  const localeTime = date.toLocaleDateString("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }); // format 'DAY HH:MM:SS AM'

  const [day, time, ampm] = localeTime.split(" ");

  return { day, time, ampm, timestamp: date.getTime() };
}
