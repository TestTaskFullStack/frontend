import io from 'socket.io-client'
import { getToken } from './auth'

export const createSocket =  () => {
    return io(import.meta.env.VITE_BACKEND_URL, {
        transports: ['websocket'],
        auth: {
            token: getToken()
        }

    })
}

export const setupSocketListeners = (socket, events, listener) => {
    socket.on(events, listener)

    return () => {
      socket.off(events, listener)
    }
} 