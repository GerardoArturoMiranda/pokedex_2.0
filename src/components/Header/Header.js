import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PokemonDetail from '../PokemonDetail/PokemonDetail';
import Dashboard from '../Dashboard/Dashboard';

export default function Header() {
  return (
    <BrowserRouter>
    <div className='w-100'>
    <Routes>
        <Route path="/detail" element={<PokemonDetail />}></Route>
        <Route path="/" element={<Dashboard/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}
