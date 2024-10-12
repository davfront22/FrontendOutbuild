// src/components/CustomButton.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "components/Common/Button";


test("renders button with text", () => {
  render(<CustomButton>Try Me</CustomButton>);
  const buttonElement = screen.getByText(/Try Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("calls onClick handler when clicked", () => {
  const handleClick = jest.fn();
  render(<CustomButton onClick={handleClick}>Try Me</CustomButton>);
  const buttonElement = screen.getByText(/Try Me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("is disabled when the disabled prop is true", () => {
  render(<CustomButton disabled>Try Me</CustomButton>);
  const buttonElement = screen.getByText(/Try Me/i);
  expect(buttonElement).toBeDisabled();
});
