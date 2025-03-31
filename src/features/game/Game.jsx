import { Box } from "@chakra-ui/react";
import GameInfoText from "./components/GameInfoText";
import GameInfoBadge from "./components/GameInfoBadge";
import GameCommentsList from "./components/GameCommentsList";
import { useParams } from "react-router-dom";
import { useGetGameQuery } from "../../services/game";
import {
  useStartGameMutation,
  useListenUserStartedGameEventQuery,
} from "../../services/socket";
import { useListenCommentEventQuery } from "../../services/socket";
import { Heading, Image } from "@chakra-ui/react";
import GameCommentForm from "./components/GameCommentForm";
import useCallToaster from "../../hooks/useCallToaster";
import { ButtonGreen } from "../../components/buttons";
import { useEffect } from "react";

const Game = () => {
  const { id } = useParams();
  const { data: game, isSuccess, refetch } = useGetGameQuery(id);

  const [startGame] = useStartGameMutation();
  const { data: eventComment } = useListenCommentEventQuery();
  const { data: eventStartedGame } = useListenUserStartedGameEventQuery();

  useCallToaster(eventStartedGame);

  useEffect(() => {
    if (eventComment) {
      refetch();
    }
  }, [eventComment, refetch]);


  const handleStartGame = () => {
    startGame({ gameId: id });
  };

  if (!isSuccess) return null;

  return (
    <Box
      display="flex"
      maxW="1200px"
      gap="20px"
      alignItems="start"
      flexDirection="row"
      p={4}
      width="100vw"
      justifyContent="space-between"
      h="80px"
    >
      <Box>
        <Heading fontSize="30px" fontWeight="bold">
          {game.data.commonGameName}
        </Heading>
        <GameInfoText value={game.data.gameDescription} />
        <GameInfoText title="Видавець" value={game.data.publisher} />
        <GameInfoText title="Дата виходу" value={game.data.releaseDate} />
        <Box display="flex" gap="10px" mb="10px">
          {game.data && game.data.inTop && (
            <GameInfoBadge title="Популярна" colorPalette="blue" icon={true} />
          )}
          {game.data.genre && (
            <GameInfoBadge
              title={game.data.genre.name}
              colorPalette="green"
              icon={false}
            />
          )}
        </Box>
        <ButtonGreen w="300px" handlePlay={handleStartGame}>
          Запустити гру
        </ButtonGreen>
        <GameCommentForm />
        <GameCommentsList comments={game.data.comments} />
      </Box>
      <Image
        rounded="10px"
        w="500px"
        h="500px"
        src={game.data.gameBoxArt}
        alt={game.data.commonGameName}
      />
    </Box>
  );
};

export default Game;
