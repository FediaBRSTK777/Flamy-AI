# 🚀 Flamy-AI
---

## ✨ Features
- ⚡ Super-fast loading (Vite + code splitting)
- 📱 Mobile-first, responsive, installable PWA
- 🧩 Modular, scalable architecture
- 🎨 Styled-components for custom design
- 🌍 Localization-ready (i18next)
- 🔥 State management & API with TanStack React Query
- 🛡️ Linting & Prettier for code quality
- 🧪 Ready for CI/CD & GitHub Actions
- 🧠 SEO-friendly (React 19 meta tags)

---

## 🛠️ Tech Stack
| Technology         | Purpose                |
|--------------------|------------------------|
| React 19 + TS      | UI & logic             |
| Vite 7             | Build tool             |
| styled-components  | Styling                |
| react-router-dom   | Routing                |
| @tanstack/react-query | State/API           |
| i18next            | Localization           |
| vite-plugin-pwa    | PWA support            |
| ESLint + Prettier  | Code quality           |

---

## 📁 Project Structure
```text
src/
  pages/        # Page components (routing targets)
  components/   # Reusable UI components
  features/     # Feature modules/business logic
  api/          # API layer (fetchers, hooks)
  locales/      # Localization files
```

---

## ⚡ Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📜 Scripts
| Script         | Description                  |
|----------------|------------------------------|
| dev            | Start dev server             |
| build          | Build for production         |
| preview        | Preview production build     |
| lint           | Run ESLint                   |
| format         | Run Prettier                 |

---

## 🧹 Linting & Formatting
- **Lint:** `npm run lint` (TypeScript, React, import, a11y rules)
- **Format:** `npm run format` (Prettier)

---

## 📲 PWA
- Manifest auto-generated (see `vite.config.ts`)
- Add your icons to `public/`
- Works offline, installable on mobile & desktop

---

## 🌍 Localization
- Powered by [i18next](https://www.i18next.com/)
- Add your translations in `src/locales/`


---

Made with ❤️ in Ukraine
