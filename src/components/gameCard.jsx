import { Button, Card, Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Badge } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"
import { Box } from "@chakra-ui/react"
const GameCard = () => {
    return (
        <Card.Root w={"300px"} overflow="hidden" border={"none"} color={"white"} position={"relative"}>
            <Image
                loading="lazy"
                src="https://miraplay.cloud/images/COUNTER-STRIKE%202.png"
                alt="Green double couch with wooden legs"
                h={"300px"}

            />
            <Card.Body gap="2" position={"absolute"} alignItems={"start"} justifyContent={"flex-end"} right={"0"} w={"100%"} h={"100%"} bgColor={"rgba(0, 0, 0, 0.58)"}>

                <Card.Title fontSize={"24px"} position={"relative"} zIndex={"1"}>Counter-Strike 2</Card.Title>
                <Card.Description color={"white"} fontSize={"16px"} position={"relative"} zIndex={"1"}>Mногопользовательская компьютерная игра </Card.Description>
                <Box display={"flex"} gap={"10px"}>
                    <Badge variant="solid" colorPalette="blue">
                        <HiStar />
                        Популярна
                    </Badge>
                    <Badge variant="solid" bgColor={"#409c15"}>
                        MMORPG
                    </Badge>
                </Box>
                <Button w={"100%"} color={"white"} fontSize={"13px"} position={"relative"} zIndex={"1"} bgColor={"#409c15"} border={"none"} borderRadius={"10px"} padding={"10px 10px"} >Грати</Button>
            </Card.Body>

        </Card.Root>
    )
}

export default GameCard;