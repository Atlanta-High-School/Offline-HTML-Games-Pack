import Link from 'next/link';
import styles from '../styles/GameCard.module.css';

export default function GameCard({ game }) {
  return (
    <Link href={`/game/${game.slug}`} className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.icon}>🎮</div>
        <h3 className={styles.gameName}>{game.name}</h3>
        <p className={styles.category}>{game.category}</p>
        <button className={styles.playButton}>
          Play Now →
        </button>
      </div>
    </Link>
  );
}
