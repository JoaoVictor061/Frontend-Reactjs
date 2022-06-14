import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/home/Homes";
import Eventos from "./pages/eventos/Eventos";
import EventosLista from "./pages/eventos/EventosLista";
import Selecaos from "./pages/selecaos/Selecaos";
import SelecaosLista from "./pages/selecaos/SelecaosLista";
import FornecedorsLista from "./pages/fornecedors/FornecedorsLista";
import Fornecedors from "./pages/fornecedors/Fornecedors";
import Conoscos from "./pages/conosco/Conoscos";
import ConoscosLista from "./pages/conosco/ConoscosLista";
import ConoscosLista02 from "./pages/conosco/ConoscosLista02";




function App() {
  return (
    <div class="background-image">
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
          <Route path="/homes" element={<Home />} />
            <Route path="/" element={<Eventos />} />

            <Route path="/eventos" element={<EventosLista />} />
            <Route path="/eventos/create" element={<Eventos />} />
            <Route path="/eventos/:id" element={<Eventos />} />

            <Route path="/selecaos" element={<SelecaosLista />} />
            <Route path="/selecaos/create" element={<Selecaos />} />
            <Route path="/selecaos/:id" element={<Selecaos />} />

            <Route path="/fornecedors" element={<FornecedorsLista />} />
            <Route path="/fornecedors/create" element={<Fornecedors />} />
            <Route path="/fornecedors/:id" element={<Fornecedors />} />

            <Route path="/conoscos" element={<ConoscosLista />} />
            <Route path="/conoscos02" element={<ConoscosLista02 />} />
            <Route path="/conoscos/create" element={<Conoscos />} />
            <Route path="/conoscos/:id" element={<Conoscos />} />


          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
