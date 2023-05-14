/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FlightParamProps,
  FlightInventoryList,
  ErrorData,
  FlightInventoryData,
  FlightItinerary,
} from "../../../../../types/types";
export const useFlightList = ({
  origin,
  dest,
  departureDate,
  returnDate,
  service,
}: FlightParamProps): FlightInventoryData => {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<FlightItinerary[]>([]);
  const [error, setError] = useState<ErrorData>();

  const baseConfig: Params = {
    baseUrl: "http://localhost:3001/promotions/priceoffers/flights/ond",
    headers: { "Content-type": "application/json" },
    method: "get",
  };

  const fetchFlightList = async () => {
    try {
      const response = await axios.request({
        ...baseConfig,
        url: baseConfig.baseUrl + `/${origin}/${dest}`,
        params: {
          departureDate: departureDate,
          returnDate: returnDate,
          service: service,
        },
      });
      setResponse(response?.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlightList();
  }, []);

  return { response, error, loading };
};

interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}
