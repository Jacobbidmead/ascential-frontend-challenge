export function formatDateTime(timestamp: Date, timeZone?: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: timeZone,
    timeZoneName: "short",
  }).format(new Date(timestamp));
}
