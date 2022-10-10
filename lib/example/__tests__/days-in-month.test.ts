import { combinate, range } from "../..";
import { getDaysInMonth } from "../days-in-month";

interface GetDaysInMonthCase {
  readonly month: string;
  readonly year: number;
  readonly expectedDays: number;
}

describe("getDaysInMonth", () => {
  const thirtyDays = combinate<GetDaysInMonthCase>({
    year: range(2020, 2023),
    month: ["april", "june", "september", "november"],
    expectedDays: [30],
  });

  const thirtyOneDays = combinate<GetDaysInMonthCase>({
    year: range(2020, 2023),
    month: ["january", "march", "may", "july", "august", "october", "december"],
    expectedDays: [31],
  });

  const twentyEightDays = combinate<GetDaysInMonthCase>({
    year: [2023],
    month: ["february"],
    expectedDays: [28],
  });

  const twentyNineDays = combinate<GetDaysInMonthCase>({
    year: [2024],
    month: ["february"],
    expectedDays: [29],
  });

  it.each([
    ...thirtyDays,
    ...thirtyOneDays,
    ...twentyEightDays,
    ...twentyNineDays,
  ])(
    "$month in $year should have $expectedDays days",
    ({ month, year, expectedDays }) => {
      expect(getDaysInMonth(month, year)).toBe(expectedDays);
    }
  );

  test("abc", () => {
    const combinations = combinate({
      color: ["r", "g"],
      brightness: [100, 200],
    });

    expect(combinations).toEqual([
      {
        brightness: 100,
        color: "r",
      },
      {
        brightness: 200,
        color: "r",
      },
      {
        brightness: 100,
        color: "g",
      },
      {
        brightness: 200,
        color: "g",
      },
    ]);
  });
});
