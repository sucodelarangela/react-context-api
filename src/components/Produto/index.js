import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCarrinhoContext } from 'common/context/Carrinho';


function Produto({ nome, foto, id, valor, unidade }) {
  // substituindo useContext pelo custom hook que criamos
  // const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  const { carrinho, adicionarProduto } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);

  // a função adicionarProduto irá para o custom hook criado

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
        {/* O interrogação faz com que a quantidade só retorne se ela tiver algum valor, assim evitamos erros com valor undefined (caso não exista) */}
        {produtoNoCarrinho?.quantidade || 0}
        <IconButton onClick={() => adicionarProduto({ nome, foto, id, valor })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);