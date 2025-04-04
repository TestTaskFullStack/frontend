import { useEffect } from "react"
import { toaster } from "../components/ui/toaster"




const useCallToaster = (event, refetch) => {
    useEffect(() => {
        if (event) {
            refetch && refetch()
            setTimeout(() => {
                toaster.create({
                    title: event && event.message || "Щось пішло не так",
                    type: event.success ? "success" : "error",
                    description: event && event.description || "", 
                })
            }, 0)
        }   
    }, [event, refetch])
}

export default useCallToaster

