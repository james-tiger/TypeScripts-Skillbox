import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormData } from '../schemas/validation';
import { useAuth } from '../hooks/useAuth';

interface RegisterFormProps {
  onToggleForm: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleForm }) => {
  const { register: registerUser, registerStatus } = useAuth();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      username: '',
      password: ''
    }
  });

  const onSubmit = (data: RegisterFormData) => {
    registerUser(data);
    // Reset form on submission if there's an error
    if (registerStatus.isError) {
      reset();
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...register('username')}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
        
        {registerStatus.isError && (
          <div className="error-message">
            {registerStatus.error instanceof Error ? registerStatus.error.message : 'Registration failed'}
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={registerStatus.isLoading}
          className="submit-button"
        >
          {registerStatus.isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      
      <div className="form-toggle">
        <p>Already have an account?</p>
        <button onClick={onToggleForm} className="toggle-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default RegisterForm; 