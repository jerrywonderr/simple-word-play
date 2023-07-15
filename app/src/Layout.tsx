import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        style={{ boxShadow: "6px 3px 10px #b3dce3" }}
      >
        <Container fluid>
          <Navbar.Brand
            className="text-primary"
            style={{
              fontSize: "1.8em",
              fontWeight: "600",
              textShadow: "1px 1px #000000a6",
            }}
          >
            DuplicateRemover
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
