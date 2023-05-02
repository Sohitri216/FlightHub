export type FlightItinerary = {
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

export type FlightParamProps = {
  origin: string;
  dest: string;
  departureDate?: string;
  returnDate?: string;
  service?: string;
};

export type FlightDetailsType = {
  uuid: string;
  depatureDetails: {
    country: string;
    airport: string;
    iataCode: string;
    date: string;
  };
  returnDetails: {
    country: string;
    airport: string;
    iataCode: string;
    date: string;
  };
  seatAvailability: string;
  price: {
    amount: string;
    currency: string;
  };
  offerType: string;
};

export type FlightInventoryList = {
  data: FlightItinerary[];
  status: number;
};

export type ErrorData = {
  status: number;
  message: string;
};

export type FlightInventoryData = {
  response?: FlightItinerary[];
  error?: ErrorData;
  loading: boolean;
};

export type AirportData = {
  code: string;
  lat: string;
  lon: string;
  name: string;
  city: string;
  state: string | null;
  country: string;
  woeid: string;
  tz: string;
  phone: string;
  type: string;
  email: string;
  url: string;
  runway_length: string | null;
  elev: string | null;
  icao: string;
  direct_flights: string;
  carriers: string;
};

export type FilterOptionsType = {
  originOptions: string[];
  returnOptions: string[];
};