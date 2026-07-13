import ".././node_modules/bootstrap/dist/css/bootstrap.css";
import ContactModal from "./components/ContactModal";
import Catalog from "./pages/Catalog/Catalog";
import Home from './pages/Home';
import LandDetails from './pages/LandDetails';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* NAVBAR GLOBAL (Selalu muncul di semua halaman) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm px-3">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-danger" to="/">
            <i className="bi bi-geo-alt-fill me-1"></i> BakulTanah
          </Link>
          
          <div className="d-flex gap-3 align-items-center">
            {/* Link untuk pindah halaman */}
            <Link to="/" className="text-decoration-none text-dark fw-semibold">Home</Link>
            <Link to="/catalog" className="text-decoration-none text-dark fw-semibold">Cari Tanah</Link>
            
            {/* <button className="btn btn-outline-danger btn-sm fw-bold rounded-pill px-3">
              Masuk
            </button> */}
          </div>
        </div>
      </nav>

      {/* ROUTING (Area yang berganti-ganti sesuai URL) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/detail/:id" element={<LandDetails />} /> {/* Rute baru ditambahkan di sini */}
      </Routes>
     
     <ContactModal/>
    </BrowserRouter>
  );
}

export default App;
