import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import SignUp from '../pages/SignUp'




export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL + '/api/auth',
    prepareHeaders: (headers) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = ""
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
  }),
})

export const { useSignInMutation, useSignUpMutation } = authApi
