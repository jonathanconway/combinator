export function getDaysInMonth(month: string, year: number) {
  switch (month) {
    case "april":
    case "june":
    case "september":
    case "november":
      return 30;
    case "february":
      const isLeapYear = year % 4 === 0;
      if (isLeapYear) {
        return 29;
      } else {
        return 28;
      }
    default:
      return 31;
  }
}
