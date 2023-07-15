import { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useNavigate } from "react-router-dom";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { SuccessAlert } from "../../components/SuccessAlert/SuccessAlert";
import { noCharRepeat, randomColor } from "../../helper/utils";
import useAppState from "../../hooks/useAppState";
import styles from "./ProcessWord.module.scss";

const COLORS: { [key: string]: string } = {};

const getColor = (char: string) => {
  if (!(char in COLORS)) {
    let color = "";
    let colors = Object.values(COLORS);

    while (true) {
      // Just to make sure no two character have same color
      color = randomColor();
      if (!colors.includes(color)) {
        break;
      }
    }

    COLORS[char] = color;
  }
  return COLORS[char];
};

export const ProcessWord = () => {
  const {
    words: { word, cleanWord },
    setWords,
  } = useAppState();
  const [modalState, updateModalState] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!word) navigate("/", { replace: true });
  }, [navigate, word, cleanWord, setWords]);

  const backToHome = useCallback(
    /**
     * Navigate user back to the home page and perform cleanup
     */
    () => {
      setWords({ word: "", cleanWord: "" }); // cleanup state
      navigate("/", { replace: true });
    },
    [navigate, setWords]
  );

  const wordsAllProcessed = useCallback(
    () => noCharRepeat(cleanWord),
    [cleanWord]
  );
  const closeModal = useCallback(() => updateModalState(false), []);

  return (
    <>
      {word && (
        <Container fluid="md">
          <Row className="p-0 pt-3 pt-md-5 p-lg-3">
            <Col
              xs={12}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {cleanWord.split("").map((letter, index) => (
                <CharacterCard
                  key={index}
                  character={letter}
                  pos={index}
                  color={getColor(letter)}
                />
              ))}
            </Col>
          </Row>
          {wordsAllProcessed() && (
            <>
              <SuccessAlert show={modalState} onHide={closeModal}>
                <h6>Original string: {word}</h6>
                <h6>Resultant string: {cleanWord}</h6>
              </SuccessAlert>
              {!modalState && (
                <Row>
                  <Col xs={12} className='d-flex justify-content-center align-items-center py-3'>
                    <Button className={styles.BackButton} variant="primary" onClick={backToHome}>
                      BACK
                    </Button>
                  </Col>
                </Row>
              )}
            </>
          )}
        </Container>
      )}
    </>
  );
};
