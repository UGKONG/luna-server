declare interface iFormat {
  date: "-" | "/" | ".";
  time: ":" | "." | "/";
}
/**
 *
 * @example
 * useDate(new Date());
 * // 2022-10-16 14:30:10
 * useDate(new Date(), false);
 * // 2022-10-16
 * useDate(new Date(), true, { date: '.', time: '/'});
 * // 2022.10.16 14/30/10
 */

export default function useDate(
  date: Date = new Date(),
  isFull: boolean = true,
  format: iFormat = { date: "-", time: ":" }
): string {
  let Y: string = String(date.getFullYear());
  let M: string = String(date.getMonth() + 1);
  M = M?.length < 2 ? "0" + M : M;
  let D: string = String(date.getDate());
  D = D?.length < 2 ? "0" + D : D;
  let dateString: string = `${Y}${format.date}${M}${format.date}${D}`;

  if (isFull) {
    let h: string = String(date.getHours());
    h = h?.length < 2 ? "0" + h : h;
    let m: string = String(date.getMinutes());
    m = m?.length < 2 ? "0" + m : m;
    let s: string = String(date.getSeconds());
    s = s?.length < 2 ? "0" + s : s;
    let timeString: string = `${h}${format.time}${m}${format.time}${s}`;

    return dateString + " " + timeString;
  }

  return dateString;
}
