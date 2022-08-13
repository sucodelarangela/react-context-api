import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importando o contexto
import { UsuarioContext } from "common/context/Usuario";

import Login from "pages/Login";
import Feira from "pages/Feira";
import Carrinho from "pages/Carrinho";

const Router = () => {
    const [nome, setNome] = useState('');
    const [saldo, setSaldo] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
                        <Login />
                    </UsuarioContext.Provider>}
                />
                <Route path='/feira' element={<Feira />} />
                <Route path='/carrinho' element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;