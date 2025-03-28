
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const useRedirect = (isSuccess, path) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navigate(path)
        }
    }, [path, navigate, isSuccess])
}

export default useRedirect
