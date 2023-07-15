import Modal from "react-bootstrap/esm/Modal";
import { ReactNode } from "react";

type ISuccessAlertProps = {
  show: boolean;
  onHide: () => void;
  children: ReactNode;
};
export const SuccessAlert = ({
  show,
  onHide,
  children,
}: ISuccessAlertProps) => {
  return (
    <>
      <Modal variant="success" show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>All good! No duplicate character found.</p>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
};
