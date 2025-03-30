import { Badge } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"

const GameInfoBadge = ({ title, colorPalette, icon }) => {
    return (
        <Badge variant="solid" colorPalette={colorPalette}>
            {icon && <HiStar />}
            {title}
        </Badge>
    )
}

export default GameInfoBadge 