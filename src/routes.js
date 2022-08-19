import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "pages/Login";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { CarrinhoProvider } from "common/context/Carrinho";
import { PagamentoProvider } from "common/context/Pagamento";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/feira' element={<CarrinhoProvider><PagamentoProvider><Feira /></PagamentoProvider></CarrinhoProvider>} />
                <Route path='/carrinho' element={<CarrinhoProvider><PagamentoProvider><Carrinho /></PagamentoProvider></CarrinhoProvider>} />
            </Routes>
        </BrowserRouter >
    );
};

export default Router;