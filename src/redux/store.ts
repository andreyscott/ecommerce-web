import customerSlice from './customer/customerSlice'
import {
  type Dispatch,
  type Middleware,
  type UnknownAction,
  configureStore,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'

// Global middleware
const middleware: Middleware[] = []
// Development middleware
if (process.env.NODE_ENV === 'development') {
  middleware.push(
    logger as Middleware<Record<string, unknown>, any, Dispatch<UnknownAction>>,
  )
}

// Create the global store
export const makeStore = () => {
  return configureStore({
    reducer: {
      customer: customerSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
