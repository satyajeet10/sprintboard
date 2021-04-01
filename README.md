# Sprintboard

A task board for small engineering teams: React 19, TypeScript, and Zustand, with board logic kept in pure,
tested functions so features like undo/redo and offline sync stay simple.

## Architecture
- `src/board.ts`: pure state transitions (`addCard`, `moveCard`), immutable, unit-tested
- `src/store.ts`: Zustand store wiring transitions to React
- UI components read from the store; no business logic in components

## Run
```bash
npm install
npm run dev
npm test
```

See [ROADMAP.md](ROADMAP.md).
