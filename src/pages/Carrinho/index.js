import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCarrinhoContext } from 'common/context/Carrinho';
import { usePagamentoContext } from 'common/context/Pagamento';
import { UsuarioContext } from 'common/context/Usuario';
import Produto from 'components/Produto';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Voltar, TotalContainer, PagamentoContainer } from './styles';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho, valorTotal } = useCarrinhoContext();
  // atualizando o saldo do usuário no carrinho. Colocamos o '= 0' para que ele não comece como undefined
  const { saldo } = useContext(UsuarioContext);
  console.log(saldo);
  const { tiposPagamento, formaPagamento, mudarFormaPagamento } = usePagamentoContext();
  const navigate = useNavigate();
  const total = saldo - valorTotal;

  return (
    <Container>
      <div>
        <Voltar onClick={() => navigate('/feira')} />
        <h2>
          Carrinho
        </h2>
      </div>
      {/* mostrando itens adicionados no carrinho na página de Carrinho */}
      {carrinho.map(produto => (
        <Produto
          {...produto}
          key={produto.id}
        />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={formaPagamento.id}
          onChange={(e) => mudarFormaPagamento(e.target.value)}>
          {tiposPagamento.map((tipo) => (
            <MenuItem value={tipo.id} key={tipo.id}>
              {tipo.nome}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {valorTotal.toFixed(2)} </span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {Number(saldo).toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {total.toFixed(2)} </span>
        </div>
      </TotalContainer>
      <Button
        disabled={total < 0}
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={
          {
            vertical: 'top',
            horizontal: 'right'
          }
        }
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
        >
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}

export default Carrinho;;