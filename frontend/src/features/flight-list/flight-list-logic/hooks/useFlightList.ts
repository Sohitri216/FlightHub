/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FlightParamProps,
  FlightDetails,
  FlightInventoryList,
  ErrorData,
  FlightInventoryData,
} from "../types/types";
export const useFlightList = ({
  origin,
  dest,
  departureDate,
  arrivalDate,
  service,
}: FlightParamProps): FlightInventoryData => {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<FlightDetails[]>([]);
  const [error, setError] = useState<ErrorData>();

  const baseConfig: Params = {
    baseUrl: "http://localhost:3001/promotions/priceoffers/flights/ond",
    headers: { "Content-type": "application/json" },
    method: "get",
  };

  const fetchFlightList = async () => {
    await axios
      .request({
        ...baseConfig,
        url: baseConfig.baseUrl + `/${origin}/${dest}`,
        params: {
          departureDate: departureDate,
          returnDate: arrivalDate,
          service: service,
        },
      })
      .then((response: FlightInventoryList) => {
        setResponse(response?.data);
      })
      .catch((err: ErrorData) => {
        setError(err);
      })
      .finally(() => setLoading(false));
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
