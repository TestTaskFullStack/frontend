import { Box, Button, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSendCommentMutation } from "../../../services/socket"
import { GameTextArea } from "./GameTextArea"
const GameCommentForm = () => {
    const { id } = useParams()
    const [comment, setComment] = useState("")
    const [sendComment] = useSendCommentMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        sendComment({ gameId: id, text: comment })
        setComment("")
    }

    return (
        <Box mt="10px">
            <form onSubmit={handleSubmit}>
                <GameTextArea placeholder="Введіть ваш коментар"  setValue={setComment} comment={comment}   />
                <Button  color={"white"} border={"1px solid #409c15"} _hover={{  bgColor: "#409c15"  }} _active={{ bgColor: "#409c15" }} type="submit">Send</Button>
            </form>
        </Box>
    )
}

export default GameCommentForm   