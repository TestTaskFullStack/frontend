import { Box, Text } from "@chakra-ui/react"

const GameInfoText = ({ title, value }) => {
    return (
        <Box display="flex" gap="10px" mb="10px">
            {title && <Text fontWeight="bold">{title}</Text>}
            <Text>{value}</Text>
        </Box>
    )
}

export default GameInfoText 