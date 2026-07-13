import { useState, useEffect } from 'react';

export default function ContactModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Mengecek apakah user sudah pernah melihat modal ini di sesi ini
    const hasSeenModal = sessionStorage.getItem('hasSeenContactModal');

    if (!hasSeenModal) {
      // Set timer 15 detik (15000 milidetik)
      const timer = setTimeout(() => {
        setShowModal(true);
        // Tandai bahwa user sudah melihat modal agar tidak terus-menerus muncul
        sessionStorage.setItem('hasSeenContactModal', 'true');
      }, 15000);

      // Membersihkan timer jika komponen di-unmount sebelum 15 detik
      return () => clearTimeout(timer);
    }
  }, []);

  // Fungsi untuk menutup modal
  const closeModal = () => setShowModal(false);

  // Jika state false, jangan render apa-apa
  if (!showModal) return null;

  return (
    <>
      {/* Latar Belakang Gelap (Backdrop) */}
      <div 
        className="modal-backdrop fade show" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1040 }}
      ></div>

      {/* Kontainer Modal */}
      <div 
        className="modal fade show d-block" 
        tabIndex="-1" 
        style={{ zIndex: 1050 }}
        onClick={closeModal} // Tutup jika klik area luar modal
      >
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            
            {/* Header Modal - Warna Merah Khas Brand */}
            <div className="modal-header bg-danger text-white border-0 py-3">
              <h5 className="modal-title fw-bold">
                <i className="bi bi-envelope-paper-heart me-2"></i>Dapatkan Info Tanah Promo
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-4 text-center">
              <p className="text-muted mb-4">
                Tinggalkan kontak Anda, jika ingin mendapatkan penawaran khusus!
              </p>

              <form>
                <div className="form-floating mb-3 text-start">
                  <input type="text" className="form-control" id="floatingName" placeholder="Nama Lengkap" />
                  <label htmlFor="floatingName" className="text-muted">Nama Lengkap</label>
                </div>
                
                <div className="form-floating mb-4 text-start">
                  <input type="tel" className="form-control" id="floatingWa" placeholder="Nomor WhatsApp" />
                  <label htmlFor="floatingWa" className="text-muted">Nomor WhatsApp</label>
                </div>

                <button 
                  type="button" 
                  className="btn btn-danger w-100 py-3 fw-bold fs-5 rounded-3 mb-2"
                  onClick={() => {
                    alert('Terima kasih! Tim kami akan segera menghubungi Anda.');
                    closeModal();
                  }}
                >
                  Hubungi Saya Nanti
                </button>
                <button type="button" className="btn btn-link text-muted text-decoration-none" onClick={closeModal}>
                  Tidak, terima kasih
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}