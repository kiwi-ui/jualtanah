import { useParams, Link } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";

export default function LandDetails() {
  const { id } = useParams(); // Mengambil ID dari URL

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
              <h1 className="fw-bold mb-1">Rp 1.200.000.000</h1>
              <div className="d-flex gap-4 fw-semibold text-dark mb-2 fs-5">
                <span><i className="bi bi-fullscreen text-muted me-1"></i> 1.500 m²</span>
                <span><i className="bi bi-file-earmark-text text-muted me-1"></i> SHM</span>
                <span><i className="bi bi-signpost text-muted me-1"></i> Zona Komersial</span>
              </div>
              <p className="text-muted mb-0 fs-5">Jl. Raya Sukolilo No 45, Kec. Sukolilo, Surabaya, Jawa Timur</p>
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
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200" 
              className="w-100 rounded-start-3" 
              style={{ height: '400px', objectFit: 'cover' }} 
              alt="Lahan Utama" 
            />
          </div>
          {/* Gambar Kecil (Kanan) */}
          <div className="col-md-4 d-flex flex-column gap-2">
            <img 
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600" 
              className="w-100 rounded-end-top-3" 
              style={{ height: '196px', objectFit: 'cover' }} 
              alt="Lahan Sudut 1" 
            />
            <img 
              src="https://images.unsplash.com/photo-1594498653385-d527259017ef?q=80&w=600" 
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
              Lahan strategis di area berkembang Surabaya Timur. Sangat cocok untuk dibangun perumahan cluster atau pergudangan. Lokasi nol jalan raya provinsi dengan akses kontainer 40 feet. Tanah sudah padat dan siap bangun, bebas banjir.
            </p>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              Legalitas aman, Sertifikat Hak Milik (SHM) on hand, PBB lunas, dan tata ruang wilayah (RTRW) sudah masuk zona kuning/komersial.
            </p>

            <h4 className="fw-bold border-bottom pb-2 mt-5 mb-4">Fakta & Fitur</h4>
            <div className="row g-3 mb-5">
              <div className="col-md-6">
                <ul className="list-unstyled text-muted">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Luas Tanah:</strong> 1.500 m²</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Dimensi:</strong> 30m x 50m</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Hadap:</strong> Selatan</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled text-muted">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Sertifikat:</strong> SHM</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Akses Jalan:</strong> Aspal 8 Meter</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Kondisi Tanah:</strong> Datar, Siap Bangun</li>
                </ul>
              </div>
            </div>

            <h4 className="fw-bold border-bottom pb-2 mb-4">Lokasi</h4>
            {/* Tempat untuk Embed Map */}
            <div className="bg-secondary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center" style={{ height: '350px' }}>
              {/* <div className="text-center text-muted">
                <i className="bi bi-map-fill fs-1"></i>
                <p className="mt-2">Google Maps Embed View di Sini</p>
              </div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.4391632731835!2d112.61313427588301!3d-7.953457192071064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827914bf6893%3A0x6b77242c4b8e2b83!2sInstitut%20Teknologi%20Sepuluh%20Nopember!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
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