import { Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './Component/Layout';
import Basket from './Component/Main/Basket';
import Home from './Component/Main/Home';
import Goods from './Component/Main/Goods';
import Error from './Component/Error';
import Favorite from './Component/Favorite';
function App() {
  return (
  <Routes>
  <Route path='/' element={<Layout/>}>
  <Route index path='/' element={<Home/>}/>
  <Route path='/basket' element={<Basket/>}/>
  <Route path='/goods' element={<Goods/>}/>
  <Route path='/favorite' element={<Favorite/>}/>
  <Route path='*' element={<Error/>}/>
  </Route>
  </Routes>
  );
}

export default App;
