import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * Modal
 * Accessible modal with overlay, close, and escape handling.
 */
export default function Modal({ open, title, onClose, children }) {
  /** This is a public function. */
  useEffect(() => {
    function handler(e) {
      if (e.key === 'Escape') onClose?.();
    }
    if (open) {
      document.addEventListener('keydown', handler);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modal-root" role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : 'Dialog'}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card" role="document">
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button className="modal-close" onClick={onClose} aria-label="Close dialog">✕</button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
