import { BrowserRouter, Routes, Route } from "react-router-dom";

// importando o contexto
import { UsuarioProvider } from "common/context/Usuario";

import Login from "pages/Login";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <UsuarioProvider>
                        <Login />
                    </UsuarioProvider>}
                />
                <Route path='/feira' element={<Feira />} />
                <Route path='/carrinho' element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;