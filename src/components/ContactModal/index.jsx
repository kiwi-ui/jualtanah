import { useState, useEffect } from 'react';
import { webapp } from '../../utils/spreadsheet';
import toast from 'react-hot-toast';

export default function ContactModal() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenContactModal');

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem('hasSeenContactModal', 'true');
      }, 1500); 

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => setShowModal(false);

  if (!showModal) return null;

  const sendWish = async (e) => {
    e.preventDefault();
    setLoading(true);
   
    if (!name.trim() || !contact.trim()) {
      toast.error("Masih ada data yang belum terisi");
      setLoading(false);
      return;
    }

    try {
      const CompleteformData = new FormData();
      CompleteformData.append("timestamp", new Date().toISOString());
      CompleteformData.append("name", name.trim());
      CompleteformData.append("contact", contact.trim());

      const res = await fetch(webapp, {
        method: "POST",
        body: CompleteformData,
      });

      if (!res.ok) throw new Error("Gagal kirim ke Google Sheet");

      setName("");
      setContact("");
      toast.success("Data berhasil dikirim!");
      closeModal();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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
        onClick={closeModal}
      >
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            
            {/* Header Modal */}
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
                Tinggalkan kontak Anda jika ingin mendapatkan penawaran khusus!
              </p>

              {/* Handler onSubmit dipasang di form */}
              <form name="JualTanah" id='form' className="text-start" onSubmit={sendWish}>
                
                {/* Input Nama */}
                <div className="form-floating mb-3">
                  <input 
                    type="text"
                    className="form-control shadow"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    name="name"
                  />
                  <label className="text-muted">Nama Lengkap</label>
                </div>
                
                {/* Input WhatsApp */}
                <div className="form-floating mb-4">
                  <input 
                    type="text"
                    className="form-control shadow"
                    placeholder="Nomor WhatsApp"
                    value={contact} //  DIPERBAIKI: Menggunakan state contact
                    onChange={(e) => setContact(e.target.value)} //  DIPERBAIKI: Mengubah state contact
                    disabled={loading}
                    name="contact"
                  />
                  <label className="text-muted">Nomor WhatsApp</label>
                </div>

                {/* Tombol Submit */}
                <button 
                  type="submit" //  DIUBAH: Menjadi type="submit" agar sinkron dengan onSubmit di form
                  className="btn btn-danger w-100 py-3 fw-bold fs-5 rounded-3 mb-2"
                  disabled={loading}
                >
                  {loading ? 'Mengirim...' : 'Hubungi Saya Nanti'}
                </button>
                
                <button 
                  type="button" 
                  className="btn btn-link text-muted text-decoration-none w-100 text-center" 
                  onClick={closeModal}
                  disabled={loading}
                >
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