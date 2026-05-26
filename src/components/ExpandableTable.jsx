import { useCallback, useEffect, useRef, useState } from 'react';

export default function ExpandableTable({ title, children }) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  const renderTable = () => (typeof children === 'function' ? children() : children);

  const openTable = useCallback(async () => {
    setOpen(true);

    try {
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // Some mobile browsers do not allow fullscreen/orientation lock.
    }

    try {
      await screen.orientation?.lock?.('landscape');
    } catch {
      // The CSS overlay still provides a landscape-style view as fallback.
    }
  }, []);

  const closeTable = useCallback(async () => {
    setOpen(false);

    try {
      screen.orientation?.unlock?.();
    } catch {
      // Optional API.
    }

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch {
      // Optional API.
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeTable();
    };

    if (open) {
      document.body.classList.add('table-modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.classList.remove('table-modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeTable, open]);

  return (
    <div className="expandable-table">
      <div className="table-actions">
        <span className="table-actions-title">{title}</span>
        <button className="table-expand-btn" type="button" onClick={openTable}>
          Expandir
        </button>
      </div>

      <div className="comparison-table-wrapper table-preview">
        {renderTable()}
      </div>

      <div
        ref={modalRef}
        className={`table-modal${open ? ' open' : ''}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="table-modal-panel">
          <div className="table-modal-header">
            <span className="table-modal-title">{title}</span>
            <button className="table-close-btn" type="button" onClick={closeTable}>
              Fechar
            </button>
          </div>

          <div className="table-modal-scroll">
            {renderTable()}
          </div>
        </div>
      </div>
    </div>
  );
}
