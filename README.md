# FALCON LEDGER

<p align="center">
  <img src="Falcon%20Ledger.png" width="120" height="120" alt="Falcon Ledger icon">
</p>

> Personal finance tracker — single-file PWA with Bloomberg-terminal aesthetic.

Track income, expenses, budgets, and recurring transactions. Works offline. No server, no database, no framework.

## Features

**Transactions**
- Add / edit / delete / copy transactions
- Search by title, note, or category
- Filter by category, date, or amount range
- Date presets (Today / Week / Month / Year / All)
- Sort by newest, oldest, highest, or lowest amount
- Per-transaction notes and category icons

**Recurring Transactions**
- Toggle recurring on any transaction
- Frequency selector: Daily / Weekly / Fortnightly / Monthly / Quarterly / Yearly
- Auto-generates on page load when the next period arrives

**Charts**
- Monthly bar chart (6-month income vs expense)
- Category doughnut chart (current month expenses)
- 30-day balance sparkline
- BAR / PIE tab switcher

**Insights & Budgets**
- Top spending category, biggest single expense, most frequent category (current month)
- Daily spend stat card
- Per-category budget limits with over-spend warnings

**Export / Import**
- Export: JSON, CSV, PDF (with profile name)
- Import: JSON and CSV (auto-detects file type)

**Personalization**
- Profile name and photo (base64, stored in localStorage)
- Dark / light theme toggle
- Auto-save indicator with timestamp

**PWA**
- Installable on mobile and desktop
- Service worker for offline access
- Apple touch icon and standalone display

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `N` | Focus transaction title input |
| `S` | Focus search bar |
| `B` | Open budget caps modal |
| `Esc` | Close any open modal |

## Usage

1. Open `Falcon Ledger.html` in any browser
2. Add transactions using the form
3. Use filters and search to find specific entries
4. Export data via JSON, CSV, or PDF
5. Install as PWA for offline use

All data is stored in your browser's localStorage under the key `expenseTrackerPro_v4`.

## Project Structure

```
Falcon Ledger/
  Falcon Ledger.html   — single-file application
  Falcon Ledger.png    — PWA icon (1254×1254)
  manifest.json        — PWA manifest
  sw.js                — service worker
  icon.svg             — SVG icon fallback
```

## Tech

- Vanilla JavaScript (no framework)
- Chart.js for charts
- Space Mono font
- localStorage for persistence
- 100% client-side, zero dependencies to deploy
