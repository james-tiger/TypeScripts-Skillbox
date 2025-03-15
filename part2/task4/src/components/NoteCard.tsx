import React from 'react';
import { Note } from '../services/api';

interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('default', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="note-card">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>
      <div className="note-footer">
        <span className="note-date">
          Created: {formatDate(note.createdAt)}
        </span>
        {note.updatedAt !== note.createdAt && (
          <span className="note-date">
            Updated: {formatDate(note.updatedAt)}
          </span>
        )}
      </div>
    </div>
  );
};

export default NoteCard; 