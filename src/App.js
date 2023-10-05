

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/> }/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/> } /> 
            <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App;
