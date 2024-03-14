import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BMICalculatorComponent from "./BMICalculatorComponent";

describe("BMICalculatorComponent", () => {
  test("calculates BMI correctly", () => {
    render(<BMICalculatorComponent />);

    // ตั้งค่าน้ำหนักและส่วนสูง
    fireEvent.change(screen.getByLabelText(/Weight \(kg\):/i), {
      target: { value: "70" },
    });
    fireEvent.change(screen.getByLabelText(/Height \(m\):/i), {
      target: { value: "1.75" },
    });

    // คลิกปุ่ม 'Calculate BMI'
    fireEvent.click(screen.getByText(/calculate bmi/i));

    // ตรวจสอบผลลัพธ์
    expect(screen.getByText(/Your BMI is:/i)).toBeInTheDocument();
    expect(screen.getByText(/Your BMI is: 22.86/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Interpretation: Normal weight/i)
    ).toBeInTheDocument();
  });

  test("handles invalid input", () => {
    render(<BMICalculatorComponent />);

    // ตั้งค่าน้ำหนักและส่วนสูงที่ไม่ถูกต้อง
    fireEvent.change(screen.getByLabelText(/Weight \(kg\):/i), {
      target: { value: "-70" },
    });
    fireEvent.change(screen.getByLabelText(/Height \(m\):/i), {
      target: { value: "0" },
    });

    // คลิกปุ่ม 'Calculate BMI'
    fireEvent.click(screen.getByText(/calculate bmi/i));

    // ควรไม่แสดงผลลัพธ์
    expect(screen.queryByText(/Your BMI is:/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Interpretation:/i)).not.toBeInTheDocument();
  });
});
