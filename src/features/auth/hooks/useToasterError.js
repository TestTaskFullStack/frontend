import { useEffect } from "react"
import { toaster } from "../../../components/ui/toaster"        



const useToasterError = (isError, error) => {
    
    useEffect(() => {
        if (isError) {
            setTimeout(() => {
                toaster.create({
                    title: error.data.message || "Помилка",
                    type: "error",
                })
            }, 0)
        }
    }, [isError, error])
}   

export default useToasterError