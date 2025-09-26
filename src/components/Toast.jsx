function Toast({ message, show, onClose }) {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        className={`toast ${show ? "show" : "hide"}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">Thông báo</strong>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
}

export default Toast;
