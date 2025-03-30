import { SimpleGrid, Button, HStack } from "@chakra-ui/react"
import { LuFolder } from "react-icons/lu"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import GameList from "./gameList"
import { useGetGenresQuery } from "../../../services/game"
import AddGameDialog from "./AddGameDialog"

const Filter = () => {
    const [open, setOpen] = useState(false)
    const { data: genres } = useGetGenresQuery()

    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const currentTab = searchParams.get('ganre');
    const handleTabChange = (value) => {
        navigate(`?ganre=${value}`);
    };



    return (
        <SimpleGrid columns={2} gap="4" width="1200px" color="white" display={"flex"} flexDirection={"column"} >
            <HStack spacing={4}>
                <AddGameDialog open={open} setOpen={setOpen} />
                <Button color={"white"} variant="ghost" onClick={() => handleTabChange('ALL')} leftIcon={<LuFolder />} _hover={{ color: '#409c15' }} _active={{ color: '#409c15' }} fontWeight={currentTab === 'all' ? 'bold' : 'normal'}>
                    ALL
                </Button>
                {genres && genres.data.map((genre) => (
                    <Button key={genre._id} variant="ghost" color={currentTab === genre.name ? '#409c15' : 'white'} onClick={() => handleTabChange(genre.name)} leftIcon={<LuFolder />} _hover={{ color: '#409c15' }} _active={{ color: '#409c15' }} fontWeight={currentTab === genre.name ? 'bold' : 'normal'}>
                        {genre.name}
                    </Button>
                ))}
            </HStack>
            <GameList currentTab={currentTab} setOpen={setOpen} />

        </SimpleGrid>
    )
}

export default Filter;