import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Quote {
  id: number
  quote: string
  author: string
}

// Sample quotes for demo purposes
const sampleQuotes = [
  { id: 1, quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { id: 2, quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { id: 3, quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
]

// Create the API slice
export const quotesApi = createApi({
  reducerPath: 'quotesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getQuotes: builder.query<Quote[], void>({
      // For this demo, we're returning sample quotes instead of making an actual API call
      queryFn: () => {
        // Simulate network delay
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: sampleQuotes })
          }, 1000)
        })
      }
    }),
  }),
})

// Export the auto-generated hooks for the endpoints
export const { useGetQuotesQuery } = quotesApi 