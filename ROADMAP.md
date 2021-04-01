# Roadmap

## v0.1 (current)
- [x] Board model with tests, Zustand store, add and move cards

## v0.2
- [ ] Drag-and-drop with dnd-kit, including keyboard dragging and screen-reader announcements
- [ ] Edit and delete cards; persist to localStorage with a versioned schema and migrations
- [ ] Styling with CSS Modules + design tokens; responsive down to 360px

## v0.3
- [ ] Undo/redo (Ctrl+Z / Ctrl+Shift+Z) with past/future stacks
- [ ] Sync with Ledger API-style backend: optimistic updates with rollback (React 19 `useOptimistic`)
- [ ] React Testing Library tests for add, move, undo, and keyboard drag

## v1.0
- [ ] Deploy to Vercel; Lighthouse and axe results in the README
