import { Card, Link, } from "@chakra-ui/react"
import ButtonUI from "./button"
import { Link as RouterLink } from "react-router-dom"
import { Box } from "@chakra-ui/react"

const CardAuth = ({ children, handleSubmit, onSubmit, title, description, link, linkText, buttonText }) => {
    return <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center">
        <Card.Root w={"500px"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Header>
                <Card.Body>
                    {children}
                </Card.Body>
                <Card.Footer justifyContent="center" flexDirection={"column"} gap="2" >
                    <ButtonUI type="submit" variant="solid">{buttonText}</ButtonUI>
                    <Link variant="underline" as={RouterLink} to={link}>{linkText}</Link>
                </Card.Footer>
            </form>
        </Card.Root>
    </Box>
}

export default CardAuth;        
