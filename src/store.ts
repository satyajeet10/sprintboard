import { create } from 'zustand';
import { addCard, emptyBoard, moveCard, type Board, type ColumnId } from './board';

interface BoardState {
  board: Board;
  add: (column: ColumnId, title: string) => void;
  move: (cardId: string, to: ColumnId, index?: number) => void;
  // Roadmap v0.3: undo/redo with past/future stacks
}

export const useBoard = create<BoardState>((set) => ({
  board: addCard(addCard(emptyBoard(), 'todo', { id: 'c1', title: 'Sketch the data model' }), 'doing', { id: 'c2', title: 'Write board tests' }),
  add: (column, title) => set((s) => ({ board: addCard(s.board, column, { id: crypto.randomUUID(), title }) })),
  move: (cardId, to, index) => set((s) => ({ board: moveCard(s.board, cardId, to, index) })),
}));
