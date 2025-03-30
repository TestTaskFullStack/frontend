import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gameApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL + '/api/',
    prepareHeaders: (headers) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (build) => ({
    getGames: build.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) =>
          lastPageParam + 1,
      },
      query({ pageParam, }) {
        const location = window.location
        const searchParams = new URLSearchParams(location.search);
        const ganre = searchParams.get('ganre');
        return `games?page=${pageParam}&limit=${9}&genre=${ganre || "ALL"}`  
      },
    }),
    getGenres: build.query({
      query() {
        return `genres`  
      },
    }),
    getGame: build.query({
      query(id) {
        return `games/${id}`  
      },
    }),
  }),
})

export const { useGetGamesInfiniteQuery, useGetGenresQuery, useGetGameQuery } = gameApi
