import { ReactNode } from "react";
import Alert from "react-bootstrap/esm/Alert";

type IErrorAlertProps = {
  children: ReactNode;
};

export const ErrorAlert = ({ children }: IErrorAlertProps) => {
  return (
    <>
      <Alert variant="danger">{children}</Alert>
    </>
  );
};
