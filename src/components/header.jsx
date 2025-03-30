
import { Box, Container } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import Logo from "../assets/logo.svg"
import { jwtDecode } from "jwt-decode";
import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"




const Header = ({ onlineUsers }) => {
    const navigate = useNavigate()
    const count = onlineUsers && onlineUsers.count ? onlineUsers.count : 0
    const token = localStorage.getItem("auth_token")
    const decoded = token ? jwtDecode(token) : ""


    const handleLogout = () => {
        localStorage.removeItem("auth_token")
        navigate("/signin")
    }
    return (
        <Box display="flex" mb={"70px"} maxW={"1200px"} alignItems="center" p={4} width={"100vw"} justifyContent="space-between" h="80px" >
            <Box display="flex" cursor={"pointer"} alignItems="flex-start" gap="2" onClick={() => navigate("/")}>
                <img width={"20px"} height={"20px"} src={Logo} alt="Your SVG" style={{ paddingTop: "1px" }} />
                <Heading fontSize={"20px"} fontWeight={"bold"}>Тестове завдання</Heading>
            </Box>
            <Box display="flex" alignItems="center" gap="2" >
                <Box display="flex" alignItems="center" gap="2">
                    <span>Онлайн: </span>
                    <span>{count}</span>
                </Box>
                <hr style={{ border: "1px solid #ffff", width: "1px", height: "20px" }} />
                <Box>
                    <span>{decoded && decoded.username}</span>
                </Box>
                <Button onClick={handleLogout} color={"white"} bgColor={"#409c15"} border={"none"} padding={"10px 10px"} > Вийти  </Button>
            </Box>
        </Box>
    )
}

export default Header;