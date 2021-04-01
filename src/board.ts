/** Pure board logic, kept outside React so it's easy to test and to add undo/redo later. */
export type ColumnId = 'todo' | 'doing' | 'done';
export interface Card { id: string; title: string }
export type Board = Record<ColumnId, Card[]>;

export const COLUMNS: { id: ColumnId; title: string }[] = [
  { id: 'todo', title: 'To do' },
  { id: 'doing', title: 'In progress' },
  { id: 'done', title: 'Done' },
];

export const emptyBoard = (): Board => ({ todo: [], doing: [], done: [] });

export function addCard(board: Board, column: ColumnId, card: Card): Board {
  return { ...board, [column]: [...board[column], card] };
}

/** Moves a card to `to` at `index` (end by default). Returns the same board if the card isn't found. */
export function moveCard(board: Board, cardId: string, to: ColumnId, index?: number): Board {
  const from = (Object.keys(board) as ColumnId[]).find((c) => board[c].some((x) => x.id === cardId));
  if (!from) return board;
  const card = board[from].find((x) => x.id === cardId)!;
  const next: Board = { ...board, [from]: board[from].filter((x) => x.id !== cardId) };
  const target = [...next[to]];
  target.splice(index ?? target.length, 0, card);
  return { ...next, [to]: target };
}
