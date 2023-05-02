import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

const FallBack = () => {
  return (
    <div>Something went wrong!</div>
  )
};

export const ErrorBoundary = ({ children }: Props) => {
  return (
    <ReactErrorBoundary FallbackComponent={FallBack}>
      {children}
    </ReactErrorBoundary>
  );
};

type Props = {
  children: JSX.Element;
};
