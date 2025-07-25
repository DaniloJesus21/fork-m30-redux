import { useDispatch, useSelector } from 'react-redux'
import { useGetProdutosQuery } from '../store/productsApi'
import { adicionarAoCarrinho, toggleFavorito } from '../store/slices'
import { RootState } from '../store'

import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.loja.favoritos)

  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produtoId: number) => {
    return favoritos.some((p) => p.id === produtoId)
  }

  const handleFavoritar = (produto: any) => {
    dispatch(toggleFavorito(produto))
  }

  const handleAdicionarAoCarrinho = (produto: any) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  if (isLoading) return <p>Carregando produtos...</p>
  if (isError || !produtos) return <p>Erro ao carregar produtos.</p>

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
          favoritar={() => handleFavoritar(produto)}
          aoComprar={() => handleAdicionarAoCarrinho(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
