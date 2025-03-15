import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { noteSchema, NoteFormData } from '../schemas/validation';
import { useNotes } from '../hooks/useNotes';

const NoteForm: React.FC = () => {
  const { createNote, createNoteStatus } = useNotes();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: '',
      content: ''
    }
  });

  const onSubmit = (data: NoteFormData) => {
    createNote(data);
    // Reset form on successful submission
    if (createNoteStatus.isSuccess) {
      reset();
    }
  };

  return (
    <div className="note-form-container">
      <h2>Create Note</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="note-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            {...register('title')}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <p className="error-message">{errors.title.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            {...register('content')}
            className={errors.content ? 'error' : ''}
            rows={5}
          />
          {errors.content && <p className="error-message">{errors.content.message}</p>}
        </div>
        
        {createNoteStatus.isError && (
          <div className="error-message">
            {typeof createNoteStatus.error === 'string' 
              ? createNoteStatus.error 
              : 'Failed to create note'}
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={createNoteStatus.isLoading}
          className="submit-button"
        >
          {createNoteStatus.isLoading ? 'Creating...' : 'Create Note'}
        </button>
      </form>
    </div>
  );
};

export default NoteForm; 