import React from "react";

const Modal = ({ isOpen, title, children, onClose, actions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box bg-base-100 shadow-xl max-w-lg w-full">
        {/* Modal Header */}
        {title && (
          <div className="modal-header flex justify-between items-center border-b pb-3">
            <h3 className="text-lg font-bold">{title}</h3>
            <button
              className="btn btn-ghost btn-circle"
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="modal-body py-4">{children}</div>

        {/* Modal Footer */}
        {actions && actions.length > 0 && (
          <div className="modal-footer flex justify-end gap-2">
            {actions.map((action, index) => (
              <button
                key={index}
                className={`btn ${action.className || "btn-primary"}`}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
