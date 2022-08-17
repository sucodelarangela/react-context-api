import { Container } from './styles';
import { memo, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { CarrinhoContext } from 'common/context/Carrinho';


function Produto({ nome, foto, id, valor, unidade }) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function adicionarProduto(novoProduto) {
    // validando se já existe o produto no carrinho
    const temProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);

    // se não tiver o produto
    if (!temProduto) {
      // o novo produto é adicionado com quantidade = 1
      novoProduto.quantidade = 1;
      // retorna um novo array com os itens anteriores mais o novo produto
      return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
    }

    // se já tiver o produto, seta o carrinho com os itens anteriores e mapeia o produto existente através do id dele
    setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDoCarrinho => {
      // se os ids forem iguais, retorna item do carrinho com a quantidade atual + 1
      if (itemDoCarrinho.id === novoProduto.id) itemDoCarrinho.quantidade += 1;
      return itemDoCarrinho;
    }));
  }

  return (
    <Container>
      <div>
        <img
          src={`/assets/${foto}.png`}
          alt={`foto de ${nome}`}
        />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          color="secondary"
        >
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => adicionarProduto({ nome, foto, id, valor })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);