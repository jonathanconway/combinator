# Combinator

> Generates combinations of things – useful for unit tests.

## Installation

```bash
npm install combinator-util
```

## Usage

```js
import { combinate } from "combinator-util";

test("example", () => {
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
```

## Background

### _Problem_

Sometimes we want to unit test a function very thoroughly, ensuring that it returns a correct result for a very large number of combinations of arguments.

If we try to hard-code every combination into our unit test, we will run into two problems:

1. It will be laborious to enter all the combinations manually (or we will have to use some external tool to generate the combinations and then copy & paste them into our code)
2. The test code will be very long and verbose - difficult to read and maintain

### _Solution_

Combinator aims to solve these problems by providing functionality to generate combinations of values in an organised and maintainable manner.

## Example

For historical reasons, determining the number of days in a month in the Western calendar is complicated.

The following short rhyme tries to summarise the rules in a memorable way:

> Thirty days have September,

> April, June and November.

> All the rest have thirty-one,

> except February alone, which has

> twenty-eight days each year

> and twenty-nine days each leap-year

Suppose we wanted to unit-test a function, `getDaysInMonth`, which takes `month` and `year` as input and returns a number of `days`.

We could simply input every possible date into the unit test and assert on the month of each. As mentioned above, that could involve quite a lot of fiddling in Excel and would result in a very long and not very human-readable test file.

Let's see how we would tackle this problem in Combinator.

Starting with the first two lines of the rhyme:

> Thirty days have September,

> April, June and November.

We can express it programatically like this:

```ts
const thirtyDays = combinate<GetDaysInMonthCase>({
  year: range(2020, 2023), // non-leap-years
  month: ["april", "june", "september", "november"],
  expectedDays: [30],
});

// output: [{ year: 2020, month: 'april', expectedDays: 30 }, ...]
```

The result can easily be passed into a data-driven test in Jest:

```ts
it.each(thirtyDays)(
  "$month in $year should have $expectedDays days",
  ({ month, year, expectedDays }) => {
    expect(getDaysInMonth(month, year)).toBe(expectedDays);
  }
);
```

On running the unit test, the following test cases will be generated and executed:

```ts
✓ april in 2020 should have 30 days (3 ms)
✓ june in 2020 should have 30 days
✓ september in 2020 should have 30 days
✓ november in 2020 should have 30 days
✓ april in 2021 should have 30 days
✓ june in 2021 should have 30 days (1 ms)
✓ september in 2021 should have 30 days
✓ november in 2021 should have 30 days (1 ms)
✓ april in 2022 should have 30 days
✓ june in 2022 should have 30 days
✓ september in 2022 should have 30 days
✓ november in 2022 should have 30 days
✓ april in 2023 should have 30 days
✓ june in 2023 should have 30 days
✓ september in 2023 should have 30 days
✓ november in 2023 should have 30 days
```

Notice how we can use a small amount of code (in this example, 5 lines for the `combinate` call) to generate a much larger set of test cases (16). This gives our test code more leverage.

Covering the remaining lines of the rhyme:

> All the rest have thirty-one,

```ts
const thirtyOneDays = combinate<GetDaysInMonthCase>({
  year: range(2020, 2023),
  month: ["january", "march", "may", "july", "august", "october", "december"],
  expectedDays: [31],
});
```

> except February alone, which has

> twenty-eight days each year

```ts
const februaryDays = combinate<GetDaysInMonthCase>({
  year: [2023],
  month: ["february"],
  expectedDays: [28],
});
```

> and twenty-nine days each leap-year

```ts
const februaryLeapYearDays = combinate<GetDaysInMonthCase>({
  year: [2024],
  month: ["february"],
  expectedDays: [29],
});
```

Notice how we can assign meaningful names to each of the test case variables, increasing the readability of the test code.

## API

<!-- INSERT GENERATED DOCS START -->

### `combinate` (function)

Generate multiple combinations of T, based on a definition of what combinations of T should be generated.

**Parameters:**

- definition (`Definition<T>`) - Object which, for each property of T, provides an array of possible values of that property.

**returns:** T[]

```tsx
// Returns:
// [
//   { color: 'r', brightness: 100 },
//   { color: 'r', brightness: 200 },
//   { color: 'r', brightness: 300 },
//   { color: 'g', brightness: 100 },
//   { color: 'g', brightness: 200 },
//   { color: 'g', brightness: 300 },
//   { color: 'b', brightness: 100 },
//   { color: 'b', brightness: 200 },
//   { color: 'b', brightness: 300 }
// ]
combinate({
  color: ["r", "g", "b"],
  brightness: [100, 200, 300],
});
```

### `Definition` (type)

Definition of combinations of properties of T.
Each property is a property of T, and each value is an array of values of that property.

### `range` (function)

Utility which generates the set of numbers between `from` and `to`.

**Parameters:**

- from (`number`) - Start of the range. E.g. `2`
- to (`number`) - End of the range. E.g. `4`

**returns:** number[]

```tsx
// Returns [2, 3, 4]
range(2, 4);
```

<!-- INSERT GENERATED DOCS END -->

## Contributing

To get set up developing this library simple install the dependencies via NPM.

```bash
npm install
```

To build the project as an importable library, run build.

```bash
npm run build
```

If you make any changes to the API, please maintain the API docs and re-build the docs before merging the changes.

```bash
npm run generate-docs
```

## Contributors ✨

Jonathan Conway ([conwy.co](http://conwy.co))

Contributions of any kind are welcome!
