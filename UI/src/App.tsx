import React from "react";
import { ErrorBoundary } from "./common/error-boundary/ErrorBoundary";
import { FlightListingPage } from "./features/flight-list/flight-list-ui/pages/FlightListingPage";

function App() {
  return (
    <ErrorBoundary>
      <FlightListingPage />
    </ErrorBoundary>
  );
}

export default App;
