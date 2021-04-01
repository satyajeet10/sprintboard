import { describe, it, expect } from 'vitest';
import { addCard, emptyBoard, moveCard } from './board';

const seeded = () => addCard(addCard(emptyBoard(), 'todo', { id: 'a', title: 'A' }), 'todo', { id: 'b', title: 'B' });

describe('board', () => {
  it('adds cards without mutating', () => {
    const before = emptyBoard();
    const after = addCard(before, 'todo', { id: 'x', title: 'X' });
    expect(before.todo).toHaveLength(0);
    expect(after.todo).toHaveLength(1);
  });

  it('moves a card across columns', () => {
    const b = moveCard(seeded(), 'a', 'done');
    expect(b.todo.map((c) => c.id)).toEqual(['b']);
    expect(b.done.map((c) => c.id)).toEqual(['a']);
  });

  it('reorders within a column', () => {
    const b = moveCard(seeded(), 'b', 'todo', 0);
    expect(b.todo.map((c) => c.id)).toEqual(['b', 'a']);
  });

  it('ignores unknown cards', () => {
    const b = seeded();
    expect(moveCard(b, 'nope', 'done')).toBe(b);
  });
});
