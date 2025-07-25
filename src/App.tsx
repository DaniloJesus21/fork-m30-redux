import { useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { RootState } from './store'

function App() {
  const favoritos = useSelector((state: RootState) => state.loja.favoritos)
  const carrinho = useSelector((state: RootState) => state.loja.carrinho)

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos />
      </div>
    </>
  )
}

export default App
