import { createContext, useContext, useEffect, useState } from 'react';

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    return (
        <CarrinhoContext.Provider value={{
            carrinho,
            setCarrinho,
            quantidadeProdutos,
            setQuantidadeProdutos,
            valorTotal,
            setValorTotal
        }}>
            {children}
        </CarrinhoContext.Provider>
    );

};

// criando um custom hook para usar o contexto de carrinho em outros componentes
export const useCarrinhoContext = () => {
    // pega os states de CarrinhoProvider
    const {
        carrinho,
        setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotal,
        setValorTotal
    } = useContext(CarrinhoContext);

    // visto que a lógica dentro de adicionarProduto e removerProduto é muito parecida, vamos criar uma função específica para mudar a quantidade dos produtos, que será chamada dentro de cada uma das funções mencionadas
    function mudarQuantidade(id, quantidade) {
        return carrinho.map(itemDoCarrinho => {
            if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
            return itemDoCarrinho;
        });
    }

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
        setCarrinho(mudarQuantidade(novoProduto.id, 1));
    }

    function removerProduto(id) {
        // identificando o produto
        const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
        // identificando se a quantidade do produto é 1 (pois se for 0, precisamos removê-lo por completo do carrinho)
        const ehUltimo = produto.quantidade === 1;

        // se o item só tiver quantidade = 1
        if (ehUltimo) {
            // retorna o carrinho anterior apenas com os itens que tiverem o id diferente do que informamos
            return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id));
        }

        setCarrinho(mudarQuantidade(id, -1));
    }

    // mostrando a quantidade de produtos no carrinho. Como é um listener, vamos usar useEffect
    useEffect(() => {
        // usaremos o reduce, que fará um loop em cada objeto (produto) e contará as quantidades
        // reduce recebe dois parâmetros: o contador e o produto. Adicionaremos ao contador (que começa como 0 -> segundo parâmetro do bloco do reduce) e adicionamos a quantidade de cada produto a ele
        const { novaQuantidade, novoTotal } = carrinho.reduce((contador, produto) => ({
            novaQuantidade: contador.novaQuantidade + produto.quantidade,
            novoTotal: contador.novoTotal + (produto.valor * produto.quantidade)
        }), {
            novaQuantidade: 0,
            novoTotal: 0
        });
        setQuantidadeProdutos(novaQuantidade);
        setValorTotal(novoTotal);
    }, [carrinho, setQuantidadeProdutos, setValorTotal]);


    console.log(carrinho);

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotal
    };
};

// O valor do parâmetro de createContext é o valor default que definimos no atributo value do Provider. Normalmente, quando trabalhamos com contextos mais simples, o parâmetro default é usado dentro dos parênteses, mas como nossos contextos nesse projeto são um pouco mais complexos, usamos value mesmo.