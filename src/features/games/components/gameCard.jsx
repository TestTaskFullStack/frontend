import { Button, Card, Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Badge } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"
import { Box } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import {ButtonGreen} from "../../../components/buttons"
const GameCard = ({ game }) => {
    const navigate = useNavigate()
    const handlePlay = () => {
        navigate(`/game/${game._id}`)
    }
    return (
        <Card.Root w={"300px"} overflow="hidden" border={"none"} color={"white"} position={"relative"}>
            <Image
                loading="lazy"
                src={game.gameImage}
                alt="Green double couch with wooden legs"
                h={"300px"}

            />
            <Card.Body gap="2" position={"absolute"} alignItems={"start"} justifyContent={"flex-end"} right={"0"} w={"100%"} h={"100%"} bgColor={"rgba(0, 0, 0, 0.58)"}>
                <Card.Title fontSize={"24px"} position={"relative"} zIndex={"1"}>{game.commonGameName}</Card.Title>
                <Box display={"flex"} gap={"10px"}>
                    {game.inTop && <Badge variant="solid" colorPalette="blue">
                        <HiStar />
                        Популярна
                    </Badge>}
                    {game.genre && <Badge variant="solid" bgColor={"#409c15"}>
                        {game.genre.name}
                    </Badge>}
                </Box>
                <ButtonGreen handlePlay={handlePlay}>Грати</ButtonGreen>

            </Card.Body>

        </Card.Root>
    )
}

export default GameCard;