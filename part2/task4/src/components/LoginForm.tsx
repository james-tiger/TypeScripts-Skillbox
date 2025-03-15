import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '../schemas/validation';
import { useAuth } from '../hooks/useAuth';

interface LoginFormProps {
  onToggleForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggleForm }) => {
  const { login, loginStatus } = useAuth();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
    // Reset form on submission
    if (loginStatus.isError) {
      reset();
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
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
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
        
        {loginStatus.isError && (
          <div className="error-message">
            {loginStatus.error instanceof Error ? loginStatus.error.message : 'Login failed'}
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={loginStatus.isLoading}
          className="submit-button"
        >
          {loginStatus.isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <div className="form-toggle">
        <p>Don't have an account?</p>
        <button onClick={onToggleForm} className="toggle-button">
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginForm; 