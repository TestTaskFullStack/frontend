import { Box, Text } from "@chakra-ui/react"

const GameCommentsList = ({ comments }) => {  
    return (
        <Box mt="30px" border="1px solid #ffff" borderRadius="5px" padding="10px" mb="60px">
            {comments && comments.toReversed().map((comment) => (
                <Box key={comment._id} padding="10px" borderBottom="1px solid #ffff">
                    <Box display="flex" gap="10px" flexDirection="column">
                        <Text>Автор: { comment.author ? comment.author.username : "Анонімний користувач"}</Text>
                        <Text>{ comment.text ? comment.text : "Коментар не знайдено"}</Text>
                    </Box>  
                </Box>
            ))}
        </Box>
    )
}

export default GameCommentsList 