import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCarrinhoContext } from 'common/context/Carrinho';

export default function NavBar() {
  const { quantidadeProdutos } = useCarrinhoContext();

  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={quantidadeProdutos === 0}
      >
        <Badge
          color="primary"
          // o badgeContent é uma propriedade do material ui que mostra o número sobre o ícone
          badgeContent={quantidadeProdutos}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
}