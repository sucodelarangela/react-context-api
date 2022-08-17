import { createContext, useState } from 'react';

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );

};

// O valor do parâmetro de createContext é o valor default que definimos no atributo value do Provider. Normalmente, quando trabalhamos com contextos mais simples, o parâmetro default é usado dentro dos parênteses, mas como nossos contextos nesse projeto são um pouco mais complexos, usamos value mesmo.