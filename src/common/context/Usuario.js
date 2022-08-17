// criando um context
import { createContext, useState } from 'react';

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuário';

// criaremos um componente extra que terá a responsabilidade de salvar os states e disponibiliza-los para os outros componentes
export const UsuarioProvider = ({ children }) => {
    const [nome, setNome] = useState('');
    const [saldo, setSaldo] = useState(0);

    return (
        <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
            {children}
        </UsuarioContext.Provider>
    );
};

