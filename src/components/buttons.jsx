import { Button } from "@chakra-ui/react"
import { LuFolder } from "react-icons/lu"

const ButtonGreen = ({ children, handlePlay, w = "100%", type }) => {
    return (
        <Button w={w} type={type} color={"white"} fontSize={"13px"} position={"relative"} zIndex={"1"} bgColor={"#409c15"} border={"none"} borderRadius={"10px"} padding={"10px 10px"} onClick={handlePlay}>{children}</Button>
    )
}


export { ButtonGreen };