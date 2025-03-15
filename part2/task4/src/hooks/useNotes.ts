import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getNotes, createNote, CreateNoteData, Note } from '../services/api';

export function useNotes() {
  const queryClient = useQueryClient();

  // Query for fetching notes
  const {
    data: notes = [],
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['notes'],
    queryFn: getNotes
  });

  // Mutation for creating a new note
  const createNoteMutation = useMutation({
    mutationFn: (data: CreateNoteData) => createNote(data),
    onSuccess: () => {
      // Invalidate notes query to refetch the notes after creating a new one
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    }
  });

  return {
    notes,
    notesStatus: {
      isLoading,
      isError,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
      refetch
    },
    createNote: createNoteMutation.mutate,
    createNoteStatus: {
      isLoading: createNoteMutation.isPending,
      isError: createNoteMutation.isError,
      error: createNoteMutation.error instanceof Error 
        ? createNoteMutation.error.message 
        : 'An unknown error occurred',
      isSuccess: createNoteMutation.isSuccess
    }
  };
} 