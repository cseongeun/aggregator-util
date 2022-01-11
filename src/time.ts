const _ = '-';
/**
 * Get Today
 * @returns Today <format: YY/MM/DD>
 */
export function getToday(): string {
  const date = new Date();
  return `${date.getFullYear()}${_}${date.getMonth() + 1}${_}${date.getDate()}`;
}

/**
 * Get A Day ago
 * @returns Before A Day <format: YY/MM/DD>
 */
export function getBeforeADay(): string {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return `${date.getFullYear()}${_}${date.getMonth() + 1}${_}${date.getDate()}`;
}

/**
 * Get A Month ago
 * @returns Before A Month  <format: YY/MM/DD>
 */
export function getBeforeAMonth(): string {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return `${date.getFullYear()}${_}${date.getMonth() + 1}${_}${date.getDate()}`;
}

/**
 * Get Specified day ago
 * @param day before day
 * @returns Before Specified Day  <format: YY/MM/DD>
 */
export function getBeforeSpecifiedDay(day: number): string {
  const date = new Date();
  date.setDate(date.getDate() - day);
  return `${date.getFullYear()}${_}${date.getMonth() + 1}${_}${date.getDate()}`;
}

/**
 * Get Elapsed time (default: ms)
 * @param start start time (new Date().getTime())
 * @param unit Unit for s or ms
 * @returns
 */
export function getElapsedTime(start: number, unit = 'ms'): number {
  const time = new Date().getTime();

  const diffInMS = time - start; // in ms
  if (unit == 'ms') return diffInMS;

  const diffInS = diffInMS / 1000; // in s
  if (unit == 's') return diffInS;

  return diffInMS;
}
