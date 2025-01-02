import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SignUp from "./SignUp";
import axios from "axios";

jest.mock("axios");

describe("SignUp Component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test("should display error if passwords don't match", async () => {
    render(<SignUp />);

    fireEvent.change(screen.getByPlaceholderText("Юзернейм"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText("Пароль"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Підтвердити пароль"), {
      target: { value: "password321" },
    });

    fireEvent.click(screen.getByText("Зареєструватись"));

    await waitFor(() => {
      expect(screen.getByText("Паролі не є однаковими.")).toBeInTheDocument();
    });
  });

  test("should display error if password is too short", async () => {
    render(<SignUp />);

    fireEvent.change(screen.getByPlaceholderText("Юзернейм"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText("Пароль"), {
      target: { value: "short" },
    });
    fireEvent.change(screen.getByPlaceholderText("Підтвердити пароль"), {
      target: { value: "short" },
    });

    fireEvent.click(screen.getByText("Зареєструватись"));

    await waitFor(() => {
      expect(screen.getByText("Пароль має бути довжиною мінімум у 8 символів.")).toBeInTheDocument();
    });
  });

  test("should call API and display success message on successful sign-up", async () => {
    axios.post.mockResolvedValue({ data: { success: true } });

    render(<SignUp />);

    fireEvent.change(screen.getByPlaceholderText("Юзернейм"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText("Пароль"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Підтвердити пароль"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Зареєструватись"));

    await waitFor(() => {
      expect(screen.getByText("Користувача було створено!")).toBeInTheDocument();
    });
  });

  test("should display error message if API request fails", async () => {
    axios.post.mockRejectedValue({
      response: { data: { message: "Error occurred" } },
    });

    render(<SignUp />);

    fireEvent.change(screen.getByPlaceholderText("Юзернейм"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText("Пароль"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Підтвердити пароль"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Зареєструватись"));

    await waitFor(() => {
      expect(screen.getByText("Error occurred")).toBeInTheDocument();
    });
  });

  test("should redirect to homepage if token is present", () => {
    localStorage.setItem("token", "mock-token");
    const { container } = render(<SignUp />);
    expect(container).toBeEmptyDOMElement(); 
  });
});
