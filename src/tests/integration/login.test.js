import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AuthProvider } from "contexts/AuthContext";
import LoginPage from "pages/login";
import { DUMMY_USER } from "utils/constants";

describe("LoginPage Integration Test", () => {
  test("renders login form with disabled button", () => {
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    // Check if the login button is initially disabled
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeDisabled();
  });

  test("enables login button when valid email and password are entered", async () => {
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    // Fill in the email and password fields with valid credentials
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: DUMMY_USER.email },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: DUMMY_USER.password },
    });

    // Check if the login button is enabled
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).not.toBeDisabled();
  });
});
