import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theme/themeSlice'
import { quotesApi } from '../features/quotes/quotesAPI'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    [quotesApi.reducerPath]: quotesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quotesApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
> 