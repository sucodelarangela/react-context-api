import { Button } from '@material-ui/core';
import { Container, Titulo, InputContainer } from './styles';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

// importando context para usar seus props de routes.js
import { UsuarioContext } from 'common/context/Usuario';

function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      {/* O restante da estrutura do componente retorna dentro do contexto em uma arrow function, que recebe como parâmetro os dados do Provider */}
      <UsuarioContext.Consumer>
        {({ nome, setNome, saldo, setSaldo }) => (
          <>
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
          </>
        )}
      </UsuarioContext.Consumer>
    </Container>
  );
};

export default Login;