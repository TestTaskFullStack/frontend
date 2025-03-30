import { useAuth } from '../features/auth/hooks/useAuth'
import { useGetOnlineUsersQuery, useListenUserAchievementEventQuery } from '../services/socket'
import Header from '../components/header'
import { Box } from '@chakra-ui/react'
import { Toaster } from '../components/ui/toaster'
import useCallToaster from '../hooks/useCallToaster'
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth()
    const { data: onlineUsers } = useGetOnlineUsersQuery();
    const { data: event } = useListenUserAchievementEventQuery()
    useCallToaster(event)
    console.log(onlineUsers)

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return null
    }

    return  <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} w={"96vw"}>  
        <Header onlineUsers={onlineUsers} />
        {children}
        <Toaster />
    </Box> 

}

export default ProtectedRoute 