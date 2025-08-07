import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/Page/NavBar/NavBar";
import Footer from "./components/Page/Footer/Footer";
import Home from "./components/Page/Home";
import ProductoDetalle from "./components/Page/ProductoDetalle/ProductoDetalle";
import AutosJuguetes from "./components/Common/ProductCard/AutosJuguetes";
import Zapatillas from "./components/Common/ProductCard/Zapatillas";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle/:id" element={<ProductoDetalle />} />
        <Route path="/categoria/zapatillas" element={<Zapatillas />} />
        <Route path="/categoria/autos" element={<AutosJuguetes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
