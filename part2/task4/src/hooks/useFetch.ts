import { useReducer, useEffect } from 'react';
import axios from 'axios';

// Define possible states
type State<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

// Define possible actions
type Action<T> =
  | { type: 'FETCH' }
  | { type: 'SUCCESS'; payload: T }
  | { type: 'ERROR'; payload: string };

// Create reducer function to handle state transitions
function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'FETCH':
      return { status: 'loading' };
    case 'SUCCESS':
      return { status: 'success', data: action.payload };
    case 'ERROR':
      return { status: 'error', error: action.payload };
    default:
      return state;
  }
}

// Interface for hook parameters
interface FetchOptions {
  headers?: Record<string, string>;
  enabled?: boolean;
  params?: Record<string, string | number>;
}

// Custom hook for fetching data
export function useFetch<T>(url: string, options: FetchOptions = {}) {
  const initialState: State<T> = { status: 'idle' };
  const [state, dispatch] = useReducer(fetchReducer<T>, initialState);

  useEffect(() => {
    // Skip fetching if not enabled
    if (options.enabled === false) {
      return;
    }

    let isMounted = true;
    
    const fetchData = async () => {
      dispatch({ type: 'FETCH' });
      
      try {
        const response = await axios.get<T>(url, {
          headers: options.headers,
          params: options.params,
          withCredentials: true // Important for auth cookies
        });
        
        // Only update state if component is still mounted
        if (isMounted) {
          dispatch({ type: 'SUCCESS', payload: response.data });
        }
      } catch (error) {
        // Only update state if component is still mounted
        if (isMounted) {
          let errorMessage = 'An unknown error occurred';
          
          if (axios.isAxiosError(error)) {
            errorMessage = error.response?.data?.message || error.message;
          } else if (error instanceof Error) {
            errorMessage = error.message;
          }
          
          dispatch({ type: 'ERROR', payload: errorMessage });
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [url, options.enabled]);

  // Helper functions for working with the state
  const isIdle = state.status === 'idle';
  const isLoading = state.status === 'loading';
  const isSuccess = state.status === 'success';
  const isError = state.status === 'error';
  
  const data = isSuccess ? state.data : undefined;
  const error = isError ? state.error : undefined;

  return { 
    isIdle,
    isLoading, 
    isSuccess, 
    isError, 
    data, 
    error 
  };
} 