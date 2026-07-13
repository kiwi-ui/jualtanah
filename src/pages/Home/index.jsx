import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-light min-vh-100">
      {/* 1. HERO SECTION (Search-Centric) */}
      <div 
        className="position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          height: '550px',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h1 className="display-4 fw-bold mb-3">Temukan Tanah Impian Anda</h1>
          <p className="lead mb-4 opacity-90">Cari kavling, lahan pertanian, dan area komersial terbaik langsung dari pemilik.</p>
          
          {/* Search Bar ala Redfin */}
          {/* <div className="p-2 bg-white rounded-3 shadow-lg d-flex flex-column flex-md-row gap-2">
            <input 
              type="text" 
              className="form-control form-control-lg border-0 bg-transparent fs-6" 
              placeholder="Masukkan kota, kecamatan, atau nama proyek..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-danger btn-lg px-4 fw-semibold rounded-2 d-flex align-items-center justify-content-center">
              <i className="bi bi-search me-2"></i> Cari Lahan
            </button>
          </div> */}
        </div>
      </div>

      {/* 2. SERVICES GRID (4 Pilar Bisnis) */}
      <div className="container mt-5" style={{ marginTop: '-40px' }}>
        <div className="row g-4 justify-content-center">
          {[
            { title: 'Beli Tanah', desc: 'Cari ratusan sertifikat tanah siap huni dan investasi.', icon: 'bi-geo-alt', color: 'text-danger' },
            { title: 'Titip Jual', desc: 'Pasarkan tanah Anda secara gratis dengan komisi transparan.', icon: 'bi-house-heart', color: 'text-success' },
            // { title: 'Kalkulator Pajak', desc: 'Simulasi biaya BPHTB, Notaris, dan AJB instan.', icon: 'bi-calculator', color: 'text-primary' },
            // { title: 'Cek Legalitas', desc: 'Layanan verifikasi SHM dan zona tata ruang kota.', icon: 'bi-shield-check', color: 'text-warning' }
          ].map((item, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="card h-100 border-0 shadow-sm p-4 rounded-3 text-center hover-up">
                <div className={`fs-1 mb-3 ${item.color}`}>
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CATEGORY BY USE (Bento Layout) */}
      {/* 3. CATEGORY BY USE (Bento Layout) */}
      <div className="container py-5">
        <h3 className="fw-bold mb-4 text-center text-md-start">Cari Berdasarkan Penggunaan</h3>
        <div className="row g-4">
          
          {/* 1. Kategori Aktif: Tanah Kavling (Bisa diklik & efek hover jalan) */}
          <div className="col-md-6 col-lg-4">
            <Link to="/catalog" className="card border-0 rounded-3 overflow-hidden text-white position-relative category-card shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400"
                className="card-img w-100" 
                style={{ height: '240px', objectFit: 'cover' }} 
                alt="Kavling" 
              />
              <div className="card-img-overlay d-flex align-items-end p-3 bg-dark-gradient">
                <h5 className="fw-bold mb-0">Tanah Kavling / Perumahan</h5>
              </div>
            </Link>
          </div>

          {/* 2. Kategori Segera Hadir: Pertanian (Tidak bisa diklik) */}
          <div className="col-md-6 col-lg-4">
            <div 
              className="card border-0 rounded-3 overflow-hidden text-white position-relative shadow-sm"
              style={{ cursor: 'not-allowed' }} // Mengubah kursor jadi tanda silang/dilarang
            >
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600" 
                className="card-img w-100" 
                style={{ height: '240px', objectFit: 'cover', filter: 'grayscale(70%)' }} // Membuat gambar agak pudar/hitam putih
                alt="Pertanian" 
              />
              
              {/* Overlay Gelap & Teks Tengah "SEGERA HADIR" */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
                <h3 
                  className="fw-bold text-white m-0 text-center" 
                  style={{ letterSpacing: '2px', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                >
                  SEGERA HADIR
                </h3>
              </div>

              {/* Teks Kategori di Bawah */}
              <div className="card-img-overlay d-flex align-items-end p-3 bg-dark-gradient" style={{ pointerEvents: 'none' }}>
                <h5 className="fw-bold mb-0 text-light opacity-75">Pertanian & Perkebunan</h5>
              </div>
            </div>
          </div>

          {/* 3. Kategori Segera Hadir: Komersial (Tidak bisa diklik) */}
          <div className="col-md-12 col-lg-4">
            <div 
              className="card border-0 rounded-3 overflow-hidden text-white position-relative shadow-sm"
              style={{ cursor: 'not-allowed' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600" 
                className="card-img w-100" 
                style={{ height: '240px', objectFit: 'cover', filter: 'grayscale(70%)' }} 
                alt="Komersial" 
              />
              
              {/* Overlay Gelap & Teks Tengah "SEGERA HADIR" */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
                <h3 
                  className="fw-bold text-white m-0 text-center" 
                  style={{ letterSpacing: '2px', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                >
                  SEGERA HADIR
                </h3>
              </div>

              {/* Teks Kategori di Bawah */}
              <div className="card-img-overlay d-flex align-items-end p-3 bg-dark-gradient" style={{ pointerEvents: 'none' }}>
                <h5 className="fw-bold mb-0 text-light opacity-75">Zona Industri & Komersial</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
