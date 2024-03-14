import BMICalculator from "./BMICalculator";

describe("BMICalculator", () => {
  let bmiCalculator;

  beforeEach(() => {
    bmiCalculator = new BMICalculator();
  });

  describe("calculateBMI", () => {
    it("should return the correct BMI", () => {
      expect(bmiCalculator.calculateBMI(60, 1.75)).toBeCloseTo(19.59, 2);
    });

    it("should return an error message for invalid input", () => {
      expect(bmiCalculator.calculateBMI(-60, 1.75)).toBe(
        "Invalid input. Weight and height must be positive values."
      );
      expect(bmiCalculator.calculateBMI(60, -1.75)).toBe(
        "Invalid input. Weight and height must be positive values."
      );
      expect(bmiCalculator.calculateBMI(0, 1.75)).toBe(
        "Invalid input. Weight and height must be positive values."
      );
    });
  });

  describe("interpretBMI", () => {
    it("should correctly interpret BMI", () => {
      expect(bmiCalculator.interpretBMI(18)).toBe("Underweight");
      expect(bmiCalculator.interpretBMI(22)).toBe("Normal weight");
      expect(bmiCalculator.interpretBMI(28)).toBe("Overweight");
      expect(bmiCalculator.interpretBMI(30)).toBe("Obese");
    });
  });
});
