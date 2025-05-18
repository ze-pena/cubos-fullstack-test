import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Unlogged from '../layouts/Unlogged';

import Login from '../pages/login';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Unlogged />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}