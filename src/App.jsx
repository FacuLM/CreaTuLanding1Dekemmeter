import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/Page/NavBar/NavBar";
import Footer from "./components/Page/Footer/Footer";
import Home from "./components/Page/Home";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<h2>Hola</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
