# React Optimization Demo

This project demonstrates various React optimization techniques, including `memo`, `useMemo`, and `useCallback`.

## Getting Started

1. Install dependencies:
```
npm install
```

2. Run the development server:
```
npm start
```

## Optimization Techniques Explained

### 1. React.memo

React.memo is a higher order component (HOC) used to memoize a component, preventing it from re-rendering when its props haven't changed.

**Usage in this project:**
- The `BestEmployees` component is wrapped with `React.memo` and includes a custom comparison function that only triggers re-renders when the `year` prop changes.
- The `Team` component is also wrapped with `React.memo` to prevent re-rendering when the `employees` array doesn't change.

### 2. useMemo

useMemo is a hook that memoizes the result of a computation, recalculating only when dependencies change.

**Usage in this project:**
- In the `App` component, `totalProfit` is memoized with `useMemo` to avoid recalculation when irrelevant state changes.
- In the `Team` component, `totalSalary` and `averageSalary` calculations are memoized.

### 3. useCallback

useCallback is a hook that memoizes callback functions to prevent unnecessary recreations on each render.

**Usage in this project:**
- Event handlers in the `App` component (`handleMonthChange`, `handleYearChange`, `handleDateChange`) are wrapped with `useCallback`.
- The `getBestEmployee` function passed to the `BestEmployees` component is memoized with `useCallback` to maintain referential equality.

## How to Test Optimizations

Open the browser console to see logging statements that indicate when components render and calculations happen:

1. When you change the month value:
   - The App component re-renders
   - The `totalProfit` calculation runs
   - Child components with memoization should not re-render

2. When you change the year value:
   - The App component re-renders
   - The BestEmployees component re-renders (because its year prop changed)
   - The Team component should not re-render

3. When you change the date:
   - Only the App component should re-render
   - Neither child component should re-render

## Performance Impact

These optimizations significantly reduce unnecessary calculations and renders, especially in larger applications with more complex component trees. The improvements include:

- Preventing cascading re-renders throughout the component tree
- Avoiding expensive recalculations when inputs haven't changed
- Maintaining stable references to callback functions passed as props 