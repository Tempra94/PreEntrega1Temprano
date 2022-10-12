import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HeroDos from './components/HeroDos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './components/Shop2/ItemList';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
    
      <Route path={'/shop'} element={<ItemList/>} />
      <Route path={'/shop/item/:id'} element={<ItemDetail/>} />
      
      </Routes>
      <HeroDos/>
      </BrowserRouter>
      
    </div>
  );
  
}

export default App;
