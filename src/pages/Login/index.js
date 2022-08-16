import { Button } from '@material-ui/core';
import { Container, Titulo, InputContainer } from './styles';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

// importando context para usar seus props de routes.js
import { UsuarioContext } from 'common/context/Usuario';
import { useContext } from 'react';

function Login() {
  const navigate = useNavigate();
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);

  return (
    <Container>
      {/* Agora que estamos usando o useContext, não precisamos mais usar o UsuarioContext.Consumer */}
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          type="number"
          value={saldo}
          onChange={(e) => setSaldo(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              R$
            </InputAdornment>
          }
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/feira')}
      >
        Avançar
      </Button>
    </Container>
  );
};

export default Login;