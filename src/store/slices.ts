import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types/produto'

type Estado = {
  carrinho: Produto[]
  favoritos: Produto[]
}

const initialState: Estado = {
  carrinho: [],
  favoritos: []
}

const lojaSlice = createSlice({
  name: 'loja',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const existe = state.carrinho.some(p => p.id === action.payload.id)
      if (!existe) {
        state.carrinho.push(action.payload)
      }
    },
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const existe = state.favoritos.find(p => p.id === action.payload.id)
      if (existe) {
        state.favoritos = state.favoritos.filter(p => p.id !== action.payload.id)
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho, toggleFavorito } = lojaSlice.actions

export default lojaSlice.reducer
