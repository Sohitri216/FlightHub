import { formatCurrency, formatText } from "./formatItem";

describe("Format Item", () => {
  it("should format according to currency value", () => {
    const testProps = {
      currency: "EUR",
      amount: "50.378",
    };
    const price = formatCurrency(testProps);
    expect(price).toEqual("€50.38");
  });

  it("should format Pascal case with gap", () => {
    const text = formatText("PascalCase");
    expect(text).toEqual("Pascal Case")
  });
});
