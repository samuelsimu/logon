import styles from '../public/styles/sidebar.module.css';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <div className={styles.profileSection}>
        {/* Placeholder for profile image */}
        <div className={styles.profilePic}></div>
        <p>MY_PROFILE</p>
      </div>
      <nav className={styles.navLinks}>
        <a href="#">LOCATION</a>
        <a href="#">HISTORY</a>
        <a href="#">PAYMENT METHOD</a>
        <a href="#">SUPPORT</a>
        <a href="#">SAFETY</a>
        <a href="#">SETTINGS</a>
        <a href="#">INFO</a>
        <a href="#" className={styles.logout}>LOGOUT</a>
      </nav>
    </div>
  );
}
