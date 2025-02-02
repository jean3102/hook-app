# React Hooks Documentation

React provides a powerful set of hooks to manage state, side effects, references, and performance optimizations in functional components. Below is an overview of some commonly used hooks.

---

## Table of Contents
1. [`useState`](#1-usestate)
2. [`useEffect`](#2-useeffect)
3. [`useLayoutEffect`](#3-uselayouteffect)
4. [`useReducer`](#4-usereducer)
5. [`useRef`](#5-useref)
6. [`useCallback`](#6-usecallback)
7. [`useMemo`](#7-usememo)
8. [`memo`](#8-memo)
9. [`useContext`](#9-usecontext)

---

## 1. `useState`

<a name="1-usestate"></a>
[`useState`](https://react.dev/reference/react/useState) is used to manage state in functional components. It allows you to store and update local state variables.

---

## 2. `useEffect`

<a name="2-useeffect"></a>
[`useEffect`](https://react.dev/reference/react/useEffect) is used to handle side effects such as data fetching, subscriptions, or manually changing the DOM. It can also include cleanup logic for effects like intervals or event listeners.

---

## 3. `useLayoutEffect`

<a name="3-uselayouteffect"></a>
[`useLayoutEffect`](https://react.dev/reference/react/useLayoutEffect) is similar to `useEffect` but runs synchronously after all DOM mutations and before the browser repaints. It is ideal for layout-related updates.

---

## 4. `useReducer`

<a name="4-usereducer"></a>
[`useReducer`](https://react.dev/reference/react/useReducer) provides an alternative to `useState` for managing more complex state logic. It uses a reducer function to define state transitions based on actions.

---

## 5. `useRef`

<a name="5-useref"></a>
[`useRef`](https://react.dev/reference/react/useRef) creates a mutable reference that persists across renders. It is useful for accessing DOM elements or maintaining mutable state that does not trigger re-renders.

---

## 6. `useCallback`

<a name="6-usecallback"></a>
[`useCallback`](https://react.dev/reference/react/useCallback) returns a memoized version of a callback function. It is useful for optimizing components that rely on stable references for functions, such as those passed as props.

---

## 7. `useMemo`

<a name="7-usememo"></a>
[`useMemo`](https://react.dev/reference/react/useMemo) memoizes the result of a computation to prevent unnecessary recalculations. It is helpful for optimizing expensive calculations that depend on specific dependencies.

---

## 8. `memo`

<a name="8-memo"></a>
[`memo`](https://react.dev/reference/react/memo) is a higher-order component that memoizes a component, preventing unnecessary re-renders when the props have not changed. It is useful for optimizing functional components that render the same output given the same props.

---

## 9. `useContext`

<a name="9-usecontext"></a>
[`useContext`](https://react.dev/reference/react/useContext) allows you to access the value of a context directly in a functional component. It is useful for consuming context values without needing to wrap components in a context consumer.

---

## Summary

Each React hook serves a specific purpose:
- **State Management**: `useState`, `useReducer`
- **Side Effects**: `useEffect`, `useLayoutEffect`
- **References**: `useRef`
- **Performance Optimization**: `useCallback`, `useMemo`, `memo`
- **Context Consumption**: `useContext`

For more details, visit the [React documentation](https://reactjs.org/docs/hooks-intro.html).

---

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/jean3102/hook-app.git
cd hook-app
npm install
```

Run the development server:

```bash
npm run dev
