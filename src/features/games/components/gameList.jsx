import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { useGetGamesInfiniteQuery } from '../../../services/game';
import GameCard from './gameCard';
import { Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDataUserFromJWT } from '../../../utils/auth';
import useCallToaster from '../../../hooks/useCallToaster';
import { useListenAddNewGameEventQuery } from '../../../services/socket';
const GameList = ({ setOpen }) => {
    const location = useLocation();
    const { data: games, fetchNextPage, isLoading, error, refetch } = useGetGamesInfiniteQuery();
    const { data: event } = useListenAddNewGameEventQuery()
    const { role } = getDataUserFromJWT()
    const totalPages = games && games.pages[0] && games.pages[0].pagination.totalPages
    const currentPage = games && games.pageParams.at(-1)
    const handleLoadMore = () => {
        fetchNextPage()
    }
    useCallToaster(event, refetch)
    useEffect(() => {
        refetch()
    }, [location.search, refetch])


    if (isLoading) {
        return <Text color="white">Loading games...</Text>;
    }

    if (error) {
        return <Text color="white">Error loading games: {error.message}</Text>;
    }

    if (!games || games.length === 0) {
        return <Text color="white">No games found</Text>;
    }




    return (
        <Box display={"flex"} flexDirection={"column"} gap="4">
            {role === "admin" && <Button variant="ghost" maxW={"1110px"} color={"white"} border={"1px solid #409c15"} _hover={{ color: '#409c15' }} _active={{ color: '#409c15' }} onClick={() => setOpen(true)}>
                Додати гру
            </Button>}
            <SimpleGrid columns={[1, 2, 3]} spacing="4" gap="4">

                {games.pages.map((page) => page.data.map((game) => (
                    <GameCard key={game._id} game={game} />
                )))}
                {totalPages > currentPage && <Box display={"flex"} justifyContent={"center"} w={"1200px"} textAlign={"center"}>
                    <Button onClick={handleLoadMore} w={"200px"} color={"white"} bgColor={"#409c15"} border={"none"} borderRadius={"10px 10px 0 0"} padding={"10px 10px"} >Показати ще</Button>
                </Box>}

            </SimpleGrid>

        </Box>
    );
};

export default GameList; 