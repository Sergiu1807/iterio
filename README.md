# ITERIO - Automatizare AI pentru Business

<div align="center">
  <img src="./iterio-colorlogo.png" alt="ITERIO Logo" width="300"/>
</div>

## Despre Proiect

ITERIO este o platformă de automatizare și consultanță specializată în transformarea businessurilor prin inteligență artificială și automatizare inteligentă. Website-ul prezintă serviciile companiei și oferă clienților posibilitatea de a solicita un audit gratuit pentru implementarea de soluții AI.

## Caracteristici

- 🤖 Agenți AI și chatboți personalizați
- ⚡ Automatizări care economisesc 20+ ore/săptămână
- 🎨 Design modern și responsive cu animații fluide
- 📱 Interfață mobile-first optimizată
- 🎯 Formulare de contact integrate
- ⚛️ Arhitectură React modernă cu TypeScript

## Stack Tehnologic

- **Frontend Framework:** React 19.2.3
- **Language:** TypeScript 5.8
- **Build Tool:** Vite 6.2
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion 12.x
- **Icons:** Lucide React
- **AI Integration:** Gemini API

## Începe Dezvoltarea

### Cerințe Preliminare

- Node.js (versiunea 18 sau mai nouă)
- npm, yarn sau pnpm

### Instalare

1. Clonează repository-ul:
   ```bash
   git clone <repository-url>
   cd iterio
   ```

2. Instalează dependențele:
   ```bash
   npm install
   ```

3. Configurează variabilele de mediu:
   - Creează un fișier `.env.local` în directorul rădăcină
   - Adaugă cheia ta Gemini API:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

4. Pornește serverul de dezvoltare:
   ```bash
   npm run dev
   ```

5. Deschide browserul la `http://localhost:3000`

## Comenzi Disponibile

- `npm run dev` - Pornește serverul de dezvoltare
- `npm run build` - Creează build-ul de producție
- `npm run preview` - Previzualizează build-ul de producție

## Structura Proiectului

```
iterio/
├── components/          # Componente React reutilizabile
│   ├── ui/             # Componente UI de bază
│   ├── Navbar.tsx      # Navigare principală
│   ├── Hero.tsx        # Secțiune hero
│   ├── PopupForm.tsx   # Formular popup
│   └── ...             # Alte componente de pagină
├── context/            # Context providers React
│   └── FormContext.tsx # Context pentru gestionarea formularelor
├── App.tsx             # Componenta principală a aplicației
├── index.tsx           # Entry point
├── index.html          # Template HTML
├── index.css           # Stiluri globale
└── vite.config.ts      # Configurare Vite

```

## Deployment

Pentru a face deploy în producție:

1. Creează build-ul de producție:
   ```bash
   npm run build
   ```

2. Testează build-ul local:
   ```bash
   npm run preview
   ```

3. Deploy folderul `dist/` pe platforma ta preferată (Vercel, Netlify, etc.)

## Configurare Tailwind

Proiectul folosește Tailwind CSS cu configurare personalizată inclusă în `index.html`. Culori și teme personalizate:

- **Brand Purple:** `#923ffc`
- **Light Purple:** `#d2b0fc`
- **Dark Background:** `#050505`
- **Card Background:** `#170730`

## Contribuții

Contribuțiile sunt binevenite! Te rugăm să:

1. Faci fork la repository
2. Creezi un branch pentru feature-ul tău (`git checkout -b feature/AmazingFeature`)
3. Faci commit la schimbările tale (`git commit -m 'Add some AmazingFeature'`)
4. Faci push la branch (`git push origin feature/AmazingFeature`)
5. Deschizi un Pull Request

## Licență

Acest proiect este licențiat sub Licența MIT - vezi fișierul [LICENSE](LICENSE) pentru detalii.

## Contact

ITERIO - Agenție de Automatizare și Consultanță

Website: [ITERIO](https://iterio.ro) (când va fi live)

---

Made with ❤️ in Romania
