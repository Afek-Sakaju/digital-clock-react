export * from "./consts";

export function getDateFormat(data = undefined) {
  return new Date(data ?? Date.now()).toLocaleDateString("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }); // format 'DAY HH:MM:SS AM'
}
