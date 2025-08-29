import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/Page/NavBar/NavBar";
import Footer from "./components/Page/Footer/Footer";
import Home from "./components/Page/Home";
import ProductoDetalle from "./components/Page/ProductoDetalle/ProductoDetalle";
import CarritoContextoProvider from "./context/CarritoContext";
import CarritoCompras from "./components/Page/CarritoCompras/CarritoCompras";
import ItemListContainer from "./components/Page/ItemListContainer/ItemListContainer";
import CheckOut from "./components/Page/CheckOut/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <CarritoContextoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<ProductoDetalle />} />
          <Route path="/categoria/:catalogo" element={<ItemListContainer />} />
          <Route path="/carrito" element={<CarritoCompras />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </CarritoContextoProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
