import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import games from '../games/games-config';
import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(games.map(game => game.category))];

  // Filter games based on search and category
  const filteredGames = games.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Offline HTML Games Pack - 300+ Free Games</title>
        <meta name="description" content="Play 300+ offline HTML games - No internet required!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>🎮 Offline HTML Games Pack</h1>
          <p className={styles.description}>
            Play 300+ free offline games - No internet required!
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className={styles.controls}>
          <input
            type="text"
            placeholder="Search games..."
            className={styles.searchBox}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className={styles.gamesGrid}>
          {filteredGames.length > 0 ? (
            filteredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))
          ) : (
            <div className={styles.noGames}>
              <p>No games found matching your search.</p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <p>Showing {filteredGames.length} of {games.length} games</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Offline HTML Games Pack - Play anytime, anywhere! 🎮</p>
      </footer>
    </div>
  );
}
