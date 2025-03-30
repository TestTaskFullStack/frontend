import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/auth'
import { socketApi } from './services/socket'
import { gameApi } from './services/game'
export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [socketApi.reducerPath]: socketApi.reducer,
        [gameApi.reducerPath]: gameApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, socketApi.middleware, gameApi.middleware),
})


setupListeners(store.dispatch)