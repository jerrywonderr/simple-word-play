import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import useAppState from "../../hooks/useAppState";
import { useNavigate } from "react-router-dom";
import { ErrorAlert } from "../../components/ErrorAlert/ErrorAlert";
import styles from "./EnterWorld.module.scss";

const strip = (word: string): string => word.replaceAll(" ", "");

export const EnterWord = () => {
  const {
    words,
    setWords,
  } = useAppState();
  
  const [errorState, setErrorState] = useState(false); // track form validity status
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      if (!ev.currentTarget.reportValidity() || !strip(words.word)) {
        setErrorState(true);
        return;
      }
      setWords({ ...words, cleanWord: words.word });
      navigate("process", { replace: true });
    },
    [navigate, setErrorState, setWords, words]
  );

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      ev.preventDefault();
      if (errorState) setErrorState(false);
      const value = strip(ev.target.value);
      setWords({ ...words, word: value});
    },
    [errorState, setWords, words]
  );

  return (
    <Container fluid="md">
      <Row className={styles.Row}>
        <Col xs={12} md={10} lg={8} xl={6}>
          <Form onSubmit={handleSubmit}>
            {errorState && (
              <ErrorAlert>
                <p style={{ fontSize: "1.5em", margin: "0em" }}>
                  Please enter a non-empty word
                </p>
              </ErrorAlert>
            )}
            <Form.Group>
              <Form.Control
                className={styles.FormField}
                type="text"
                placeholder="Enter word here..."
                value={words.word}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button className={styles.SubmitButton} type="submit">
              submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
