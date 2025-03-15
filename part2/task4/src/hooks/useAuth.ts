import { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { User, login, register, logout, getCurrentUser, LoginData, RegisterData } from '../services/api';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const queryClient = useQueryClient();

  // Query for getting current user
  const { data, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    retry: false,
    onSuccess: (data) => {
      setUser(data);
    },
    onError: () => {
      setUser(null);
    }
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: (data: LoginData) => login(data),
    onSuccess: (user) => {
      setUser(user);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    }
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: (data: RegisterData) => register(data),
    onSuccess: (user) => {
      setUser(user);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    }
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setUser(null);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    }
  });

  return {
    user,
    isAuthenticated: !!user,
    isLoadingUser,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    loginStatus: {
      isLoading: loginMutation.isPending,
      isError: loginMutation.isError,
      error: loginMutation.error,
    },
    registerStatus: {
      isLoading: registerMutation.isPending,
      isError: registerMutation.isError,
      error: registerMutation.error,
    },
    logoutStatus: {
      isLoading: logoutMutation.isPending,
      isError: logoutMutation.isError,
      error: logoutMutation.error,
    }
  };
} 