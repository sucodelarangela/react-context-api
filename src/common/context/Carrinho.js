import { createContext, useContext, useState } from 'react';

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

// criando um custom hook para usar o contexto de carrinho em outros componentes
export const useCarrinhoContext = () => {
    // pega os states de CarrinhoProvider
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

    return {
        carrinho,
        setCarrinho,
        adicionarProduto
    };
};

// O valor do parâmetro de createContext é o valor default que definimos no atributo value do Provider. Normalmente, quando trabalhamos com contextos mais simples, o parâmetro default é usado dentro dos parênteses, mas como nossos contextos nesse projeto são um pouco mais complexos, usamos value mesmo.