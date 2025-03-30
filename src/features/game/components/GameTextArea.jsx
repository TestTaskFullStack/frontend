import { Textarea as TextareaUI } from "@chakra-ui/react"  


const GameTextArea = ({ placeholder, setValue, comment }) => {
    return (
        <TextareaUI resize={"none"} h={"100px"} value={comment} onChange={(e) => setValue(e.target.value)} _placeholder={{ color: '#d8d8d8' }} type="text" placeholder={placeholder} bgColor={"#1a1a1a"} border={"1px solid #409c15"} color={"white"} />
    )
}

export { GameTextArea };    