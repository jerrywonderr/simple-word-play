import Card from "react-bootstrap/esm/Card";
import useAppState from "../../hooks/useAppState";
import { cleanString, count } from "../../helper/utils";
import styles from "./CharacterCard.module.scss";
import deleteIconPath from "../../assets/images/circle-xmark.svg";

type ICharacterCardProps = {
  character: string;
  pos: number;
  color: string;
};
export const CharacterCard = ({
  character,
  pos,
  color,
}: ICharacterCardProps) => {
  const {
    words,
    setWords,
  } = useAppState();

  const handleDelete = () => {
    if (count(words.cleanWord, character) <= 1) return;

    const cleaned = cleanString(words.cleanWord, character, pos);
    setWords({ ...words, cleanWord: cleaned });
  };

  return (
    <Card className={styles.Card} style={{ backgroundColor: color }}>
      <Card.Body className={styles.CardBody}>
        {character}
        <img
          onClick={handleDelete}
          className={styles.DeleteIcon}
          src={deleteIconPath}
          alt="delete icon"
        />
      </Card.Body>
    </Card>
  );
};
