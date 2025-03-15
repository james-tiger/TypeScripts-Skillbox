import React from 'react';
import { useNotes } from '../hooks/useNotes';
import NoteCard from './NoteCard';

const NoteList: React.FC = () => {
  const { notes, notesStatus } = useNotes();

  if (notesStatus.isLoading) {
    return <div className="loading">Loading notes...</div>;
  }

  if (notesStatus.isError) {
    return (
      <div className="error-container">
        <p className="error-message">{notesStatus.error}</p>
        <button onClick={() => notesStatus.refetch()} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  if (notes.length === 0) {
    return <div className="empty-notes">No notes yet. Create your first note!</div>;
  }

  return (
    <div className="note-list">
      <h2>Your Notes</h2>
      <div className="notes-container">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteList; 