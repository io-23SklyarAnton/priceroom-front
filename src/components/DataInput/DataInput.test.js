import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DataInput from "./DataInput";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios");

describe("DataInput Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render form fields and submit button", () => {
    render(
      <Router>
        <DataInput />
      </Router>
    );

    expect(screen.getByLabelText(/Район/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Поверх/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Загальна кількість поверхів/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Кількість кімнат/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Загальна площа квартири/)).toBeInTheDocument();
    expect(screen.getByText(/Підтвердити/)).toBeInTheDocument();
  });

  test("should show error messages for invalid input", async () => {
    render(
      <Router>
        <DataInput />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Поверх/), { target: { value: "0" } });
    fireEvent.change(screen.getByLabelText(/Загальна кількість поверхів/), { target: { value: "0" } });

    fireEvent.click(screen.getByText(/Підтвердити/));

    await waitFor(() => {
      expect(screen.getByText(/Поверх має бути в межах від 1 до 100/)).toBeInTheDocument();
      expect(screen.getByText(/Загальна кількість поверхів має бути в межах від 1 до 100/)).toBeInTheDocument();
    });
  });

  test("should submit form and display predicted price", async () => {
    render(
      <Router>
        <DataInput />
      </Router>
    );

    axios.post.mockResolvedValueOnce({ data: { price: 100000 } });

    fireEvent.change(screen.getByLabelText(/Район/), { target: { value: "Деснянський" } });
    fireEvent.change(screen.getByLabelText(/Поверх/), { target: { value: "5" } });
    fireEvent.change(screen.getByLabelText(/Загальна кількість поверхів/), { target: { value: "10" } });
    fireEvent.change(screen.getByLabelText(/Кількість кімнат/), { target: { value: "3" } });
    fireEvent.change(screen.getByLabelText(/Загальна площа квартири/), { target: { value: "100" } });

    fireEvent.click(screen.getByText(/Підтвердити/));

    await waitFor(() => {
      expect(screen.getByText(/Прогнозована ціна: 100000.00 дол./)).toBeInTheDocument();
    });
  });

  test("should handle errors when API fails", async () => {
    render(
      <Router>
        <DataInput />
      </Router>
    );

    axios.post.mockRejectedValueOnce(new Error("API error"));

    fireEvent.change(screen.getByLabelText(/Район/), { target: { value: "Деснянський" } });
    fireEvent.change(screen.getByLabelText(/Поверх/), { target: { value: "5" } });
    fireEvent.change(screen.getByLabelText(/Загальна кількість поверхів/), { target: { value: "10" } });
    fireEvent.change(screen.getByLabelText(/Кількість кімнат/), { target: { value: "3" } });
    fireEvent.change(screen.getByLabelText(/Загальна площа квартири/), { target: { value: "100" } });

    fireEvent.click(screen.getByText(/Підтвердити/));

    await waitFor(() => {
      expect(screen.getByText(/Не вдалося отримати прогноз ціни або зберегти дані./)).toBeInTheDocument();
    });
  });
});
