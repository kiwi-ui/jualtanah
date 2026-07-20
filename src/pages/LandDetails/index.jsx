import { useParams, Link } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import { dummyLands } from '../../utils/dummyLands';

export default function LandDetails() {
  const { id } = useParams(); // Mengambil ID dari URL
  const land = dummyLands.find((land) => land.id === parseInt(id))
  
  if (!land) {
    return (
      <div className="container text-center py-5 my-5">
        <h3 className="text-danger fw-bold mb-3">Lahan Tidak Ditemukan</h3>
        <p className="text-muted">Katalog tanah yang Anda cari mungkin sudah laku atau salah alamat.</p>
        <Link to="/" className="btn btn-primary rounded-pill px-4">Kembali Cari Tanah</Link>
      </div>
    )
  }

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* 1. HEADER: Harga & Info Singkat */}
      <div className="bg-white border-bottom pt-4 pb-3 mb-3">
        <div className="container">
          <Link to="/catalog" className="text-decoration-none text-muted small mb-3 d-inline-block">
            <i className="bi bi-arrow-left me-1"></i> Kembali ke Pencarian
          </Link>
          <div className="row align-items-end">
            <div className="col-md-8">
              <h1 className="fw-bold mb-1">{land.price}</h1>
              <div className="d-flex gap-4 fw-semibold text-dark mb-2 fs-5">
                <span><i className="bi bi-fullscreen text-muted me-1"></i> {land.size}</span>
                <span><i className="bi bi-file-earmark-text text-muted me-1"></i> {land.cert}</span>
                <span><i className="bi bi-signpost text-muted me-1"></i> {land.loc}</span>
              </div>
              <p className="text-muted mb-0 fs-5">{land.address}</p>
            </div>
            {/* <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <button className="btn btn-outline-dark fw-semibold me-2">
                <i className="bi bi-heart me-1"></i> Simpan
              </button>
              <button className="btn btn-outline-dark fw-semibold">
                <i className="bi bi-share me-1"></i> Bagikan
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* 2. IMAGE GALLERY (Redfin Style Bento Grid) */}
      <div className="container mb-5">
        <div className="row g-2">
          {/* Gambar Utama (Kiri) */}
          <div className="col-md-8">
            <img 
              src={land.img1}
              className="w-100 rounded-start-3" 
              style={{ height: '400px', objectFit: 'cover' }} 
              alt="Lahan Utama" 
            />
          </div>
          {/* Gambar Kecil (Kanan) */}
          <div className="col-md-4 d-flex flex-column gap-2">
            <img 
              src={land.img2}
              className="w-100 rounded-end-top-3" 
              style={{ height: '196px', objectFit: 'cover' }} 
              alt="Lahan Sudut 1" 
            />
            <img 
              src={land.img3}
              className="w-100 rounded-end-bottom-3" 
              style={{ height: '196px', objectFit: 'cover' }} 
              alt="Lahan Sudut 2" 
            />
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT & STICKY SIDEBAR */}
      <div className="container">
        <div className="row g-5">
          
          {/* SISI KIRI: Detail Properti */}
          <div className="col-lg-8">
            <h4 className="fw-bold border-bottom pb-2 mb-4">Tentang Lahan Ini</h4>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              {land.desc}
            </p>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              {land.desc2}
            </p>

            <h4 className="fw-bold border-bottom pb-2 mt-5 mb-4">Fakta & Fitur</h4>
            <div className="row g-3 mb-5">
              <div className="col-md-6">
                <ul className="list-unstyled text-muted">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Luas Tanah:</strong> {land.size}</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Dimensi:</strong> {land.dimension}</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Hadap:</strong> {land.face}</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled text-muted">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Sertifikat:</strong> {land.cert}</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Akses Jalan:</strong> {land.roadAccess}</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Kondisi Tanah:</strong> {land.landCondition}</li>
                </ul>
              </div>
            </div>

            <h4 className="fw-bold border-bottom pb-2 mb-4">Lokasi</h4>
            <div className="bg-secondary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center" style={{ height: '350px' }}>
              <iframe
                src={land.location}
                style={{ border: 0 }}
                height="100%"
                width="100%"
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Lahan Tanah"
              ></iframe>
            </div>
          </div>

          {/* SISI KANAN: Sticky Contact Form (Redfin Style) */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '90px', zIndex: 10 }}>
              <h5 className="fw-bold mb-1">Tertarik dengan Lahan ini?</h5>
              <p className="text-muted small mb-4">Hubungi penjual untuk menjadwalkan survei lokasi.</p>
              
              <div className="row mb-4">
                <img src="https://ui-avatars.com/api/?name=Budi+Santoso&background=random" className="rounded-circle col-3 col-md-2 col-lg-3"  alt="Agen" />
                <div className="col-5 col-md-7 col-lg-4">
                  <h6 className="fw-bold mb-0">Budi Santoso</h6>
                  <span className="badge bg-primary mt-1">Pemilik</span>
                </div>

                <div className="col-4 col-md-2">
                  <a href="https://wa.me/628123456789" className="badge bg-success text-decoration-none" target="_blank" rel="noopener noreferrer" style={{ paddingBottom: "0.21rem"}}>
                    <IoLogoWhatsapp className="me-1" />
                    Hubungi
                  </a>
                </div>
              </div>

              {/* <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Nama Lengkap" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email Anda" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" placeholder="Nomor WhatsApp" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="3" defaultValue="Halo, saya tertarik dengan Lahan di Kec. Sukolilo ini. Kapan saya bisa survei lokasi?"></textarea>
                </div>
                <button type="button" className="btn btn-danger w-100 fw-bold py-2 mb-2">Kirim Pesan</button>
                <button type="button" className="btn btn-outline-success w-100 fw-bold py-2">
                  <i className="bi bi-whatsapp me-2"></i> Chat WhatsApp
                </button>
              </form> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
  
}