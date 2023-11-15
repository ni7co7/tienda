import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

import { useState, useEffect } from "react";


import Frente from './img/new.jpg'; 
import Fondo from './img/casa-verde.webp'; 
import Moderna from './img/casa3.jpg';

function App() {
  const [backgroundImages, setBackgroundImages] = useState([Fondo, Frente, Moderna]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, [backgroundImages]);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Establece una altura mínima para cubrir toda la ventana
  };

  


  
  return (
    <div   className="fondo" style={backgroundImageStyle}  >
     <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </BrowserRouter>   
      </CartProvider> 
    </div>
  );
}

export default App;