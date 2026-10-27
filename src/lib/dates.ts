// Dates as a terminal prints them: 2025-08-01.
export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
