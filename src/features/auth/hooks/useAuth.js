import { useCheckTokenQuery } from "../../../services/auth"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


export const useAuth = () => {
    const { data: tokenVerify, isSuccess, isLoading } = useCheckTokenQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoading && (!isSuccess || !tokenVerify?.success )) {
            navigate('/signin')
        }
    }, [tokenVerify, isSuccess, isLoading, navigate])

    return {
        isAuthenticated: tokenVerify?.success,
        isLoading,
        isSuccess
    }
}