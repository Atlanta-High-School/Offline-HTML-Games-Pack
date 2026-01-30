import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import games from '../../games/games-config';
import styles from '../../styles/Game.module.css';

export default function GamePage() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the game by slug
  const game = games.find(g => g.slug === slug);

  if (!game) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h1>Game Not Found</h1>
          <p>The game you're looking for doesn't exist.</p>
          <Link href="/" className={styles.backButton}>
            ← Back to Games
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{game.name} - Offline HTML Games</title>
        <meta name="description" content={game.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.header}>
        <Link href="/" className={styles.backButton}>
          ← Back to Games
        </Link>
        <h1 className={styles.gameTitle}>{game.name}</h1>
      </div>

      <div className={styles.gameContainer}>
        <iframe
          src={game.path}
          className={styles.gameFrame}
          title={game.name}
          allowFullScreen
        />
      </div>

      <div className={styles.footer}>
        <p className={styles.tip}>💡 Tip: Press F11 for fullscreen mode!</p>
      </div>
    </div>
  );
}

// Generate static paths for all games
export async function getStaticPaths() {
  const paths = games.map(game => ({
    params: { slug: game.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

// Get static props for each game
export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug
    }
  };
}
