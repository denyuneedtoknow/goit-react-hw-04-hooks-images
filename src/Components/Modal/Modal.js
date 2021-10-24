import PropTypes from 'prop-types';
import { useEffect } from "react";
import { createPortal } from 'react-dom';
import s from "./Modal.module.css";


function Modal({ toggleModal, children }) {
    useEffect(() => {
        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    });


    const handleEscape = e => {
        if (e.code === 'Escape') {
            toggleModal();
        }
    };

    const handleClose = e => {
        if (e.currentTarget === e.target) {
            toggleModal();
        }
    };



    return createPortal(
        <div className={s.Overlay} onClick={handleClose}>
            <div className={s.Modal}>{children}</div>
        </div>,
        document.getElementById('modalRoot'),
    );
}

Modal.propTypes = {
    handleClose: PropTypes.func,
}

export default Modal