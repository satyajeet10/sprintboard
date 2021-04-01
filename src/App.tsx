import { useState } from 'react';
import { COLUMNS, type ColumnId } from './board';
import { useBoard } from './store';

export default function App() {
  const { board, add, move } = useBoard();
  const [title, setTitle] = useState('');

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>Sprintboard</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (title.trim()) add('todo', title.trim());
          setTitle('');
        }}
      >
        <label>New card <input value={title} onChange={(e) => setTitle(e.target.value)} /></label>
        <button type="submit">Add</button>
      </form>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 16 }}>
        {COLUMNS.map((col) => (
          <section key={col.id} aria-labelledby={`col-${col.id}`} style={{ background: '#f3f4f6', borderRadius: 8, padding: 12 }}>
            <h2 id={`col-${col.id}`} style={{ fontSize: 16 }}>{col.title} ({board[col.id].length})</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {board[col.id].map((card) => (
                <li key={card.id} style={{ background: '#fff', borderRadius: 6, padding: 8, marginBottom: 8 }}>
                  {card.title}
                  {/* Buttons are the keyboard-accessible baseline; drag-and-drop arrives in v0.2. */}
                  <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
                    {COLUMNS.filter((c) => c.id !== col.id).map((c) => (
                      <button key={c.id} type="button" onClick={() => move(card.id, c.id as ColumnId)}>→ {c.title}</button>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
