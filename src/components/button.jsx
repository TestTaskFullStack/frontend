import { Button } from "@chakra-ui/react"

const ButtonUI = ({variant, children, type}) => {
    return (
        <Button bg={"#409c15"} variant={variant} type={type}>{children}</Button>
    )
}

export default ButtonUI;