import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import CadastroPage from './cadastro/CadastroPage';
import Resultado from './resultadoCadastro/ResultadoCadastro';

import { observer } from 'mobx-react-lite';
import ModalContainer from './modalContainer/ModalContainer';
import ResultadoFichas from './ResultadoFichas/ResultadoFichas';


function App() {

  return (
    <>
      {/* <BrowserRouter> */}
      <ModalContainer/>
        <Routes>
          <Route path='/' element={<CadastroPage />} />
          {/* <Route path='/resultado' element={<Resultado />} /> */}
          <Route path='/resultadofinal' element={<ResultadoFichas />} />
        </Routes>
      {/* </BrowserRouter> */}    

    </>
  );
}

export default observer(App);
