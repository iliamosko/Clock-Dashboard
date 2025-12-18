# Clock Dashboard

A small React + TypeScript + Vite app that displays a dashboard-style clock with a few widgets.

What this app shows
- **Analog clock**: main clock display (component: `AnalogClock`).
- **Date widget**: current date information (component: `DateWidget`).
- **Quote generator**: shows quotes from the bundled `data` sets (component: `QuoteGenerator`).
- **Theme/color support**: color picker utilities allow theme customization (`utils/colorPickerService.ts`).

Getting started (ensure the app launches)

Prerequisites:
- Node.js (LTS recommended, e.g. >= 18)

Steps:

1. Open a terminal and change to the project root (where this README.md is).
2. Install dependencies:

```bash
npm install
```

3. Start the dev server (Vite):

```bash
npm run dev
```

4. Open the app in your browser at http://localhost:5173 (Vite default). If Vite reports a different port in the terminal, use that port instead.


Troubleshooting
- If the dev server does not start, confirm Node.js is installed (`node -v`).
- If dependencies fail to install, try removing `node_modules` and `package-lock.json` then run `npm install` again.
- If the app opens a different port, check the terminal output from `npm run dev` for the correct URL.

Where to look in the code
- Main app entry: [src/main.tsx](src/main.tsx#L1)
- App layout and styles: [src/App.tsx](src/App.tsx#L1) and [src/App.css](src/App.css#L1)
- Widgets: [src/components](src/components)