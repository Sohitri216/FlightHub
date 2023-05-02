import { useFlightList } from "./useFlightList";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";

jest.mock("axios");
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));

const testPayloadData = {
  origin: "FRA",
  dest: "ROM",
  departureDate: "2023-08-15",
  returnDate: "2023-08-30",
  service: "amadeusBestPrice",
};

describe("use flight list hook", () => {
  beforeEach(() => {
    jest.spyOn(axios, "get").mockImplementation();
    (useState as jest.Mock).mockImplementation(() => ["loading", false]);
    (useState as jest.Mock).mockImplementation(() => ["response", []]);
    (useState as jest.Mock).mockImplementation(() => ["error", []]);
    (useEffect as jest.Mock).mockImplementationOnce((cb) => cb()());
  });
  it("should render", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: "Test Data" });
    const res = await axios.get(
      "http://localhost:3001/promotions/priceoffers/flights/ond"
    );
    expect(res).toEqual({ data: "Test Data" });
  });
});
