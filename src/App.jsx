import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;