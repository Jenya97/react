import { Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './Component/Layout';
import Basket from './Component/Main/Basket';
import Home from './Component/Main/Home';
import Goods from './Component/Main/Goods';
import Error from './Component/Error';

function App() {
  return (
  <Routes>
  <Route path='/' element={<Layout/>}>
  <Route index path='/' element={<Home/>}/>
  <Route path='/basket' element={<Basket/>}/>
  <Route path='/goods' element={<Goods/>}/>
  <Route path='*' element={<Error/>}/>
  </Route>
  </Routes>
  );
}

export default App;
