import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.icon}>🎮</span>
          <span className={styles.title}>Offline Games</span>
        </Link>
        
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <a 
            href="https://github.com/Atlanta-High-School/Offline-HTML-Games-Pack" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
