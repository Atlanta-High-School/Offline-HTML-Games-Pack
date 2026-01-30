# 🎮 Offline HTML Games Pack

A Next.js web application featuring **300+ offline HTML games** - Play anytime, anywhere, with or without internet!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Atlanta-High-School/Offline-HTML-Games-Pack)

## ✨ Features

- 🎯 **300+ Games**: Huge collection of fun, playable HTML games
- 🚀 **Next.js + React**: Modern, fast, and responsive web application
- 📱 **Mobile Friendly**: Fully responsive design works on all devices
- 🔍 **Search & Filter**: Easy game discovery with search and category filters
- 🌐 **Offline First**: PWA support with Service Worker for offline gameplay
- ⚡ **Fast Loading**: Optimized for quick load times and smooth performance
- 🎨 **Clean UI**: Beautiful, intuitive user interface

## 🚀 Quick Start

### Deploy to Vercel (Recommended)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Deploy!

Your games website will be live in minutes!

### Local Development

```bash
# Clone the repository
git clone https://github.com/Atlanta-High-School/Offline-HTML-Games-Pack.git
cd Offline-HTML-Games-Pack

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Or export static files
npm run export
```

## 📁 Project Structure

```
Offline-HTML-Games-Pack/
├── pages/                  # Next.js pages (routing)
│   ├── index.js           # Home page with game launcher
│   ├── game/[slug].js     # Dynamic game player page
│   ├── _app.js            # App wrapper with service worker
│   └── _document.js       # HTML document structure
├── components/            # Reusable React components
│   ├── Navbar.js          # Navigation bar
│   └── GameCard.js        # Game card component
├── games/                 # Game metadata
│   └── games-config.js    # Auto-generated game configuration
├── styles/                # CSS modules
│   ├── globals.css        # Global styles
│   ├── Home.module.css    # Home page styles
│   ├── Game.module.css    # Game page styles
│   ├── Navbar.module.css  # Navbar styles
│   └── GameCard.module.css # Game card styles
├── public/                # Static files
│   ├── games-data/        # Game HTML files
│   │   └── offline/       # 300+ game files
│   ├── sw.js              # Service Worker for offline support
│   └── manifest.json      # PWA manifest
├── scripts/               # Build scripts
│   └── generate-games-config.js  # Auto-generate game list
├── next.config.js         # Next.js configuration
├── vercel.json           # Vercel deployment config
└── package.json          # Dependencies and scripts
```

## 🎮 How It Works

1. **Game Discovery**: Browse 300+ games on the home page with search and filter
2. **Click to Play**: Click any game card to open the game player
3. **Fullscreen Mode**: Press F11 for immersive fullscreen gameplay
4. **Offline Support**: Service Worker caches games for offline play

## 🔧 Configuration

### Adding New Games

1. Add your HTML game file to `public/games-data/offline/`
2. Run the config generator:
   ```bash
   npm run generate-config
   ```
3. Rebuild the application:
   ```bash
   npm run build
   ```

### Customizing the UI

- Edit styles in `styles/` directory
- Modify components in `components/` directory
- Update game metadata in `games/games-config.js`

## 📱 PWA Support

This application is a Progressive Web App (PWA) with:

- **Service Worker**: Automatic caching for offline play
- **Manifest**: Install as a native app on mobile devices
- **Offline First**: Works without internet connection

## 🌐 Deployment Options

### Vercel (Recommended)
- One-click deployment
- Automatic HTTPS
- Global CDN
- Free tier available

### Other Platforms
- **Netlify**: Works with static export
- **GitHub Pages**: Use `npm run export`
- **Any Static Host**: Deploy the `out/` folder

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: CSS Modules
- **PWA**: Service Worker + Manifest
- **Deployment**: Vercel

## 📝 Original Usage

The original collection contains 300 offline games that can each run on a single file. This is a good option if you are having internet connectivity issues, or you're at some place with restricted internet.

## 📄 License

ISC

## 🤝 Contributing

Contributions welcome! Feel free to:
- Add new games
- Improve the UI
- Fix bugs
- Add features

## 🎉 Credits

Original game collection from the Offline HTML Games Pack repository.
