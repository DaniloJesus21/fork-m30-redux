import { configureStore } from '@reduxjs/toolkit'
import lojaReducer from './slices'
import { productsApi } from './productsApi'

export const store = configureStore({
  reducer: {
    loja: lojaReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
