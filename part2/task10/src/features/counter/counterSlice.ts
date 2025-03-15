import { createAppSlice } from '../../app/createAppSlice'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
}

export const counterSlice = createAppSlice({
  name: 'counter',
  initialState,
  reducers: create => ({
    increment: create.reducer(state => {
      state.value += 1
    }),
    decrement: create.reducer(state => {
      state.value -= 1
    }),
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value += action.payload
      }
    ),
    incrementAsync: create.asyncThunk(
      async (amount: number) => {
        await new Promise(resolve => setTimeout(resolve, 500))
        return amount
      },
      {
        pending: state => {
          state.status = 'loading'
        },
        fulfilled: (state, action) => {
          state.status = 'idle'
          state.value += action.payload
        },
        rejected: state => {
          state.status = 'failed'
        },
      }
    ),
  }),
  selectors: {
    selectCount: state => state.value,
    selectStatus: state => state.status,
  },
})

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} = counterSlice.actions

export const { selectCount, selectStatus } = counterSlice.selectors

export default counterSlice.reducer 