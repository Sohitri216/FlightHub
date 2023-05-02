import { formatCurrency, formatText } from "./formatItem";

describe("Format Item", () => {
  it("should format according to currency value", () => {
    const testProps = {
      currency: "EUR",
      amount: "50.378",
    };
    const test = formatCurrency(testProps);
    expect(test).toEqual("€50.38");
  });

  it("should format Pascal case with gap", () => {
    const test = formatText("PascalCase");
    expect(test).toEqual("Pascal Case")
  });
});
