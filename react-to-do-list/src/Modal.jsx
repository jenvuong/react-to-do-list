export const Modal = ({ onConfirm, onCancel, onClose }) => {
    return (
        <div className="modal-container">
            <div className="modal-window">
                <div className="modal-header">
                    <p onClick={() => onClose()} className="close">&times;</p>
                </div>
                <div className="modal-text">
                    <h2>Are you sure you want to clear all tasks?</h2>
                </div>
                <div className="modal-footer">
                    <button onClick={() => onConfirm()} className="confirm-btn button">Yes</button>
                    <button onClick={() => onCancel()} className="cancel-btn button">Cancel</button>
                </div>
            </div>
        </div>
    )
}