/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FlightParamProps,
  FlightInventoryList,
  ErrorData,
  FlightInventoryData,
  FlightIntenary,
} from "../../../../types/types";
export const useFlightList = ({
  origin,
  dest,
  departureDate,
  returnDate,
  service,
}: FlightParamProps): FlightInventoryData => {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<FlightIntenary[]>([]);
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
          returnDate: returnDate,
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
