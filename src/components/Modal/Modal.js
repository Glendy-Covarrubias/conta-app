import styles from '../Modal/Modal.module.css';

export default function Modal({ onClose, title = "", children }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        {children}
        <button className={styles.closeButton} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}