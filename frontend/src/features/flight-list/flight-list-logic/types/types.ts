export type FlightParamProps = {
  origin: string;
  dest: string;
  departureDate?: string;
  arrivalDate?: string;
  service?: string;
};

export type FlightDetails = {
  uuid: string;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  seatAvailability: string;
  price: {
    amount: string;
    currency: string;
  };
  offerType: string;
};

export type FlightInventoryList = {
  data: FlightDetails[];
  status: number;
};

export type ErrorData = {
  status: number;
  message: string;
};

export type FlightInventoryData = {
  response?: FlightDetails[];
  error?: ErrorData;
  loading: boolean;
};
