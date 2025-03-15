import { z } from 'zod';

// Login validation schema
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .min(5, 'Email must contain at least 5 characters'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must contain at least 8 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Registration validation schema
export const registerSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Must be a valid email address'),
  username: z
    .string()
    .min(1, 'Username is required')
    .min(5, 'Username must contain at least 5 characters'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must contain at least 8 characters'),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

// Note creation validation schema
export const noteSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .min(5, 'Title must contain at least 5 characters'),
  content: z
    .string()
    .min(1, 'Content is required')
    .min(10, 'Content must contain at least 10 characters')
    .max(300, 'Content must not exceed 300 characters'),
});

export type NoteFormData = z.infer<typeof noteSchema>; 