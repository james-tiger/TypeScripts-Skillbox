import { 
  createSlice, 
  SliceCaseReducers, 
  CreateSliceOptions, 
  ValidateSliceCaseReducers, 
  ActionCreatorWithPayload, 
  ActionCreatorWithoutPayload,
  AsyncThunk, 
  createAsyncThunk 
} from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from './store'

/**
 * A function that accepts an initial state, an object of reducer functions, and a "slice name",
 * and automatically generates action creators and action types that correspond to the reducers and state.
 *
 * The `createAppSlice` method is a wrapper around RTK's `createSlice` that also adds some helpful
 * utilities for creating thunks and selectors specifically for a Redux Toolkit app.
 *
 * @param options An object of options, including `name`, `initialState`, and `reducers`.
 */
export function createAppSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
  Selectors = Record<string, (state: RootState) => unknown>,
  ReducerPath extends string = Name
>(
  options: Omit<
    CreateSliceOptions<State, CaseReducers, Name>,
    'reducers' | 'extraReducers'
  > & {
    reducers?: (
      (builder: {
        reducer: <ReducerState extends State = State>(
          state: ReducerState,
          action: any
        ) => ReducerState
        asyncThunk: <Returned, ThunkArg = void>(
          typePrefix: string,
          payloadCreator: (
            arg: ThunkArg,
            thunkAPI: {
              dispatch: AppDispatch
              state: RootState
              extra: unknown
              requestId: string
              abort: (reason?: string) => void
              signal: AbortSignal
            }
          ) => Promise<Returned> | Returned,
          options?: {}
        ) => AsyncThunk<Returned, ThunkArg, {}>
      }) => ValidateSliceCaseReducers<State, CaseReducers>
    )
    selectors?: Selectors
  }
) {
  const reducers =
    typeof options.reducers === 'function'
      ? options.reducers({
          reducer: (state, action) => {
            // Just a wrapper around the usual reducer
            return { ...state, ...action.payload }
          },
          asyncThunk: createAsyncThunk.withTypes<{
            dispatch: AppDispatch
            state: RootState
          }>(),
        })
      : options.reducers

  const slice = createSlice({
    ...options,
    reducers,
  })

  return {
    ...slice,
    actions: slice.actions as any as {
      [K in keyof typeof slice.actions]: (typeof slice.actions)[K] extends ActionCreatorWithPayload<
        infer P,
        infer T
      >
        ? ActionCreatorWithPayload<P, T>
        : (typeof slice.actions)[K] extends ActionCreatorWithoutPayload<infer T>
        ? ActionCreatorWithoutPayload<T>
        : (typeof slice.actions)[K]
    },
    selectors: options.selectors as Selectors,
  }
} 