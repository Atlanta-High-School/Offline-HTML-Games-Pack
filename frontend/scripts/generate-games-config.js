const fs = require('fs');
const path = require('path');

// Read all game files from the offline directory
const gamesDir = path.join(__dirname, '../public/games-data/offline');
const files = fs.readdirSync(gamesDir);

// Filter for HTML files
const gameFiles = files.filter(file => file.endsWith('.html') || file.endsWith('.htm'));

// Generate game metadata
const games = gameFiles.map(file => {
  // Create a nice display name from filename
  const name = file
    .replace(/\.(html|htm)$/, '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .trim();
  
  // Create a slug for the URL
  const slug = file.replace(/\.(html|htm)$/, '');
  
  return {
    id: slug,
    name: name,
    slug: slug,
    path: `/games-data/offline/${file}`,
    description: `Play ${name} - An exciting offline game!`,
    category: 'Action', // Default category, can be customized
  };
});

// Sort alphabetically by name
games.sort((a, b) => a.name.localeCompare(b.name));

// Write to games config file
const configPath = path.join(__dirname, '../games/games-config.js');
const configContent = `// Auto-generated games configuration
// Total games: ${games.length}

const games = ${JSON.stringify(games, null, 2)};

export default games;
`;

// Ensure games directory exists
const gamesConfigDir = path.join(__dirname, '../games');
if (!fs.existsSync(gamesConfigDir)) {
  fs.mkdirSync(gamesConfigDir, { recursive: true });
}

fs.writeFileSync(configPath, configContent);

console.log(`✅ Generated config for ${games.length} games!`);
console.log(`📁 Config saved to: ${configPath}`);
