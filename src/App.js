import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HeroDos from './components/HeroDos';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <HeroDos/>
      <ItemListContainer greeting='© 2013 ETrade S.A'/>
    </div>
  );
  
}

export default App;
