import { useFlightList } from "../hooks/api/useFlightList";
import { FlightDetailsType } from "../../../../types/types";
import { createFilterData } from "../helpers/createFilterData";
import { createCountryWiseFlightDetails } from "../helpers/createCountryWiseFlightDetails";

export const FlightListingContainer = ({
  render,
  renderLoading,
  renderError,
}: Props) => {
  let flightListElems: FlightDetailsType[] = [];

  const payloadData = {
    origin: "FRA",
    dest: "ROM",
    departureDate: "2023-08-15",
    returnDate: "2023-08-30",
    service: "amadeusBestPrice",
  };

  const { response, error, loading } = useFlightList(payloadData);

  if (loading) {
    return renderLoading;
  }
  if (error) {
    return renderError;
  }
  if (response) {
    flightListElems = createCountryWiseFlightDetails(response);
  }

  return render({
    flightList: flightListElems,
    flightFilterOptions: createFilterData(flightListElems),
  });
};

type Props = {
  render: (props: any) => JSX.Element;
  renderLoading: JSX.Element;
  renderError: JSX.Element;
};
