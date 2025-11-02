import ExpandedText from "@/components/ExpandedText";
import GameAttributes from "@/components/GameAttributes";
import useGame from "@/hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading size="4xl">{game.name}</Heading>
      <ExpandedText>{game.description_raw}</ExpandedText>
      <GameAttributes game={game} />
    </>
  );
};
export default GameDetailPage;
