import React from  "react";
import styles from './Modal.module.scss';

const Modal = ({active, setActive}) => {
    return (
        <div className={styles.modal}>
            <h2>hello there</h2>
             <div className={styles.modalContent}>
            
            </div>
        </div>
    );
};

export default Modal;