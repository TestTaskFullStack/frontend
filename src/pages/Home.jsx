import Header from "../components/header"
import { Box } from "@chakra-ui/react"
import Filter from "../components/filter"
import { Heading } from "@chakra-ui/react"
const Home = () => {
    return (
        <Box>
            <Header />
            <Box display="flex" ml="100px" maxW={"1200px"} gap="20px" alignItems="start" flexDirection={"column"} p={4} width={"100vw"} justifyContent="space-between" h="80px">
                <Heading fontSize={"30px"} fontWeight={"bold"} >
                    Всі ігри
                </Heading>
                <Filter />
            </Box>
        </Box>
    )
}

export default Home;
