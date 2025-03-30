import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ERROR_CODES } from '../../config/constants'
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL + '/api/auth',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('auth_token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (credentials) => ({
        url: 'signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: build.mutation({
      query: (credentials) => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    checkToken: build.query({
      query: () => ({
        url: 'token',
        method: 'GET',
      })
    }),
    
  }),
})

export const { 
  useSignInMutation, 
  useSignUpMutation, 
  useCheckTokenQuery 
} = authApi
