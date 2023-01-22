import { FC } from "react";
import { useParams } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";

const Character: FC = () => {
  const { characterId } = useParams();

  return <CharacterDetails characterId={characterId || ""} />;
};

export default Character;
