
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import { Input, Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useCreateGameMutation } from "../../../services/socket"

const GameInfoInput = ({ placeholder, register }) => {
    return (
        <Input  {...register}   _placeholder={{ color: '#d8d8d8' }} type="text" placeholder={placeholder} bgColor={"#1a1a1a"} border={"1px solid #409c15"} color={"white"} />
    )
}


const AddGameDialog = ({ open, setOpen } ) => {
    const { register, handleSubmit } = useForm()
    const [createGame] = useCreateGameMutation()
    const onSubmit = (data) => {
        createGame({commonGameName: data.name})
    }

    return (
        <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)} placement={"center"}>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Dialog.Content bgColor={"#1a1a1a"} border={"1px solid #409c15"} borderRadius={"10px"} >
                            <Dialog.Header>
                            <Dialog.Title fontSize={"20px"} fontWeight={"bold"} color={"white"}>Додати гру </Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body display={"flex"} flexDirection={"column"} gap={"10px"}>
                                <GameInfoInput placeholder="Назва гри" register={register("name")} />
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button color={"white"} _hover={{ color: '#409c15' }} _active={{ color: '#409c15' }} variant="outline">Відмінити</Button>
                            </Dialog.ActionTrigger>
                            <Button type="submit" color={"white"} _hover={{ color: '#409c15' }} _active={{ color: '#409c15' }} variant="outline">Зберегти</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" color={"white"} _hover={{ color: '#409c15' }} _active={{ color: '#409c15' }} />
                        </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </form>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default AddGameDialog;
