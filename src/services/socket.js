import { createApi } from '@reduxjs/toolkit/query/react';
import { createSocket, setupSocketListeners } from '../utils/socket';
import { SOCKET_EVENTS } from '../../config/constants';



const socket = createSocket();

const createSocketQuery = (event, emitEvent = null) => ({
    queryFn: () => ({ data: null }),
    async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        try {
            await cacheDataLoaded;

            if (emitEvent) {
                socket.emit(emitEvent, arg);
            }
            const listener = (data) => {

                if (data) {
                    updateCachedData(() => data);
                }
            };


            const cleanup = setupSocketListeners(socket, event, listener);
            await cacheEntryRemoved;
            cleanup();

        } catch (error) {
            console.error('Socket error:', error);
        }
    }
});




const createSocketMutation = (event) => ({
    queryFn: () => ({ data: null }),
    async onCacheEntryAdded(arg) {
        try {
            socket.emit(event, arg);
        } catch (error) {
            console.error('Socket mutation error:', error);
        }
    }
});

export const socketApi = createApi({
    reducerPath: 'socketApi',
    baseQuery: () => ({ data: null }),
    endpoints: (builder) => ({
        getOnlineUsers: builder.query(createSocketQuery(SOCKET_EVENTS.USERS_ONLINE, SOCKET_EVENTS.USERS_ONLINE)),
        sendComment: builder.mutation(createSocketQuery(SOCKET_EVENTS.GAME_COMMENT, SOCKET_EVENTS.GAME_COMMENT)),
        startGame: builder.mutation(createSocketMutation(SOCKET_EVENTS.USER_STARTED_GAME)),
        createGame: builder.mutation(createSocketMutation(SOCKET_EVENTS.GAME_CREATED)),
        listenCommentEvent: builder.query(createSocketQuery(SOCKET_EVENTS.GAME_COMMENTED, SOCKET_EVENTS.GAME_SUBSCRIBE)),
        listenAddNewGameEvent: builder.query(createSocketQuery(SOCKET_EVENTS.GAME_CREATED, SOCKET_EVENTS.GAME_SUBSCRIBE)),
        listenUserStartedGameEvent: builder.query(createSocketQuery(SOCKET_EVENTS.USER_STARTED_GAME_RESPONSE, SOCKET_EVENTS.GAME_SUBSCRIBE)),
        listenUserAchievementEvent: builder.query(createSocketQuery(SOCKET_EVENTS.USER_ACHIEVEMENT, SOCKET_EVENTS.GAME_SUBSCRIBE)),
    })
});
            
export const {
    useSendCommentMutation, 
    useGetOnlineUsersQuery,
    useListenCommentEventQuery,
    useListenAddNewGameEventQuery,
    useListenUserStartedGameEventQuery,
    useStartGameMutation,
    useCreateGameMutation,
    useListenUserAchievementEventQuery
} = socketApi;  