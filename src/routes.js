import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "pages/Login";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";
import { CarrinhoProvider } from "common/context/Carrinho";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/feira' element={<CarrinhoProvider><Feira /></CarrinhoProvider>} />
                <Route path='/carrinho' element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;