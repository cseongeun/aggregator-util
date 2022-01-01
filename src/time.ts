/**
 * Get Today
 * @returns Today <format: YY/MM/DD>
 */
export function getToday(): string {
  const date = new Date();
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
}

/**
 * Get A Day ago
 * @returns Before A Day <format: YY/MM/DD>
 */
export function getBeforeADay(): string {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
}

/**
 * Get A Month ago
 * @returns Before A Month  <format: YY/MM/DD>
 */
export function getBeforeAMonth(): string {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
}

/**
 * Get Specified day ago
 * @param day before day
 * @returns Before Specified Day  <format: YY/MM/DD>
 */
export function getBeforeSpecifiedDay(day: number): string {
  const date = new Date();
  date.setDate(date.getDate() - day);
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
}
