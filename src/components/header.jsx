
import { Box, Container } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import Logo from "../assets/logo.svg"

const Header = () => {
    return (
        <Box display="flex" ml="100px" mb={"70px"}  maxW={"1200px"} alignItems="center" p={4}  width={"100vw"} justifyContent="space-between" h="80px" >
            <Box  display="flex"  alignItems="flex-start" gap="2">
                <img width={"20px"}  height={"20px"} src={Logo} alt="Your SVG" style={{ paddingTop: "1px" }} />
                <Heading fontSize={"20px"} fontWeight={"bold"}>Тестове завдання</Heading>
            </Box>
            <Box display="flex" alignItems="center" gap="2" >
                <Box display="flex" alignItems="center" gap="2">
                    <span>Онлайн: </span>
                    <span>100</span>
                </Box>
                <hr style={{ border: "1px solid #ffff", width: "1px", height: "20px" }} />
                <Box>
                    <span>Kyryl</span>
                </Box>
            </Box> 
        </Box>
    )
}

export default Header;