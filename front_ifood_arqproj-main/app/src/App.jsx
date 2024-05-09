import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ListarCurso } from './Curso/ListarCurso'
import { CadastroCurso } from './Curso/CadastroCurso'
import { EdicaoCurso } from './Curso/EdicaoCurso'
import { ExclusaoCurso } from './Curso/ExclusaoCurso'

import * as React from 'react';


function App() {
  return (
    <>
      <Routes>
            <Route path='/cadastroCurso' element={<CadastroCurso />} />
            <Route path='/edicaoCurso' element={<EdicaoCurso/>} />
            <Route path='/exclusaoCurso' element={<ExclusaoCurso/>} />
            <Route path='/listarCurso' element={<ListarCurso/>} />
      </Routes>
    </>
  )
}
export default App
