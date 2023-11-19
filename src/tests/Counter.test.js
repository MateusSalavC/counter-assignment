import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const counter = screen.getByText("Counter");
  expect(counter).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const zero = screen.getByTestId("count");
  expect(zero).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  const add = screen.getByText("+");
  const count = screen.getByTestId("count");
  fireEvent.click(add);
  expect(count).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  const sub= screen.getByText("-");
  const count = screen.getByTestId("count");
  fireEvent.click(sub);
  expect(count).toHaveTextContent("-1");
});