import { Link } from "react-router-dom";

// Data Dummy Tanah
const dummyLands = [
  { id: 1, title: 'Kavling Premium Cluster A', price: 'Rp 450 Juta', size: '120 m²', cert: 'SHM', loc: 'Kec. Sukolilo, Surabaya', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400' },
  { id: 2, title: 'Lahan Basah Produktif Luas', price: 'Rp 1.2 Milyar', size: '1.500 m²', cert: 'SHM', loc: 'Jember, Jawa Timur', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400' },
  { id: 3, title: 'Tanah Komersial Nol Jalan Raya', price: 'Rp 3.5 Milyar', size: '600 m²', cert: 'HGB', loc: 'Pamekasan, Madura', img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=400' },
];

export default function Catalog() {
  return (
    <div className="container-fluid p-0 d-flex flex-column" style={{ height: '100vh', overflow: 'hidden' }}>
      
      {/* INNER NAVBAR / FILTER BAR */}
      <div className="bg-white border-bottom p-3 d-flex flex-wrap gap-2 align-items-center z-3 shadow-sm">
        <input type="text" className="form-control form-control-sm w-auto" placeholder="Surabaya, Jawa Timur" />
        <select className="form-select form-select-sm w-auto">
          <option>Semua Harga</option>
          <option>&lt; 500 Juta</option>
          <option>500 Jta - 1M</option>
        </select>
        <select className="form-select form-select-sm w-auto">
          <option>Semua Sertifikat</option>
          <option>SHM</option>
          <option>HGB / Girik</option>
        </select>
        {/* <button className="btn btn-outline-dark btn-sm ms-auto">
          <i className="bi bi-sliders me-1"></i> Filter Lanjutan
        </button> */}
      </div>

      {/* SPLIT SCREEN BODY */}
      <div className="d-flex flex-grow-1 position-relative" style={{ overflow: 'hidden' }}>
        
        {/* SISI KIRI: DAFTAR KARTU TANAH */}
        <div className="col-12 col-lg-7 h-100 p-4 bg-light" style={{ overflowY: 'auto' }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0 text-secondary">3 Lahan Tersedia</h5>
            <select className="form-select form-select-sm w-auto border-0 bg-transparent fw-semibold">
              <option>Urutkan: Terbaru</option>
              <option>Harga: Rendah ke Tinggi</option>
            </select>
          </div>

          <div className="row g-4">
            {dummyLands.map((land) => (
            <div className="col-md-6" key={land.id}>
              {/* Bungkus dengan Link */}
              <Link to={`/detail/${land.id}`} className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden position-relative card-land hover-up">
                  <span className="badge bg-dark position-absolute top-0 start-0 m-3 z-2 px-2 py-1.5">{land.cert}</span>
                  
                  {/* Hati-hati dengan tombol like, gunakan e.preventDefault() agar tidak ikut pindah halaman saat di-klik */}
                  <button 
                    className="btn btn-white rounded-circle position-absolute top-0 end-0 m-3 z-2 shadow-sm d-flex align-items-center justify-content-center" 
                    style={{ width: '36px', height: '36px' }}
                    onClick={(e) => { e.preventDefault(); alert('Tersimpan!'); }}
                  >
                    <i className="bi bi-heart text-danger"></i>
                  </button>
                  
                  <img src={land.img} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} alt={land.title} />
                  
                  <div className="card-body p-3">
                    <h4 className="fw-extrabold text-danger mb-1">{land.price}</h4>
                    <div className="d-flex gap-3 text-muted small mb-2 fw-semibold">
                      <span><i className="bi bi-fullscreen me-1"></i> {land.size}</span>
                      <span><i className="bi bi-shield-check me-1"></i> Verified</span>
                    </div>
                    <h6 className="card-title fw-bold text-dark text-truncate mb-1">{land.title}</h6>
                    <p className="text-muted small mb-0"><i className="bi bi-geo-alt-fill me-1"></i> {land.loc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          </div>
        </div>

        {/* SISI KANAN: PETA (Sticky Desktop View) */}
        <div className="d-none d-lg-block col-lg-5 h-100 bg-secondary-subtle position-relative">
          {/* Sisi ini nantinya dipasang Google Maps / Mapbox SDK */}
          <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-muted">
            <i className="bi bi-map fs-1 mb-2"></i>
            <p className="fw-semibold">Integrasi Peta Interaktif</p>
            <span className="small text-center px-4">Disini area render koordinat bounds SVG / Mapbox API</span>
          </div>
        </div>

      </div>
    </div>
  );
}