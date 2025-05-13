import React from 'react';
import './ContactModal.scss';
import { X } from 'lucide-react'; // modern icon (install lucide-react if needed)

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Contact Info</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <div className="contact-item">
            <label>Email:</label>
            <a href="mailto:nikitasinha771@gmail.com">nikitasinha771@gmail.com</a>
          </div>
          <div className="contact-item">
            <label>Phone:</label>
            <a href="tel:+19086132861">+1 (908) 613 2861</a>
          </div>
          <div className="contact-item">
            <label>LinkedIn:</label>
            <a href="https://www.linkedin.com/in/nikita-sinha-29402918b" target="_blank" rel="noreferrer">
              linkedin.com/in/nikita-sinha
            </a>
          </div>
          <div className="contact-item">
            <label>GitHub:</label>
            <a href="https://github.com/D3SERT-Eagle" target="_blank" rel="noreferrer">
              github.com/D3SERT-Eagle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
