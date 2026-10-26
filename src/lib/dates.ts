const format = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export function formatDate(date: Date): string {
  return format.format(date);
}
